import { useEffect, useRef, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  TextField,
  Divider,
  Stack,
  Alert,
  Snackbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase";
import { useAuth } from "../contexts/AuthContext";

export default function ProfileEdit() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [postCount, setPostCount] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    bio: "",
    github: "",
    website: "",
  });

  useEffect(() => {
    if (authLoading) return undefined;

    if (!user) {
      setLoading(false);
      setPostCount(0);
      return undefined;
    }

    const postsQuery = query(collection(db, "posts"), where("authorId", "==", user.uid));
    const unsubscribePosts = onSnapshot(
      postsQuery,
      snapshot => setPostCount(snapshot.size),
      postsError => {
        console.error("게시글 수 조회 실패:", postsError);
        setPostCount(0);
      },
    );

    const loadProfile = async () => {
      try {
        const profileSnapshot = await getDoc(doc(db, "users", user.uid));
        const profile = profileSnapshot.exists() ? profileSnapshot.data() : {};

        setForm({
          name: profile.displayName || user.displayName || "",
          email: user.email || profile.email || "",
          bio: profile.bio || "",
          github: profile.github || "",
          website: profile.website || "",
        });
        setPreviewUrl(profile.photoURL || user.photoURL || "");
      } catch (loadError) {
        console.error("프로필 정보 조회 실패:", loadError);
        setError("프로필 정보를 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
    return unsubscribePosts;
  }, [authLoading, user]);

  useEffect(
    () => () => {
      if (previewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }
    },
    [previewUrl],
  );

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = e => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/") || file.size > 2 * 1024 * 1024) {
      setError("2MB 이하의 JPG, PNG 이미지를 선택해주세요.");
      e.target.value = "";
      return;
    }

    if (previewUrl.startsWith("blob:")) {
      URL.revokeObjectURL(previewUrl);
    }

    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setError("");
  };

  const handleSave = async () => {
    if (!user || saving) return;

    if (!form.name.trim()) {
      setError("이름을 입력해주세요.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      let photoURL = previewUrl;

      if (selectedFile) {
        const extension = selectedFile.name.split(".").pop() || "jpg";
        const imagePath = `profiles/${user.uid}/${Date.now()}.${extension}`;
        const imageRef = ref(storage, imagePath);
        await uploadBytes(imageRef, selectedFile);
        photoURL = await getDownloadURL(imageRef);
      }

      await setDoc(
        doc(db, "users", user.uid),
        {
          uid: user.uid,
          displayName: form.name.trim(),
          email: user.email || form.email,
          bio: form.bio.trim(),
          github: form.github.trim(),
          website: form.website.trim(),
          photoURL,
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      );

      setSuccessOpen(true);
      setTimeout(() => navigate("/profile"), 700);
    } catch (saveError) {
      console.error("프로필 정보 저장 실패:", saveError);
      setError("프로필 저장에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setSaving(false);
    }
  };

  if (authLoading || loading) {
    return <Box sx={{ p: 3 }}>프로필 정보를 불러오는 중입니다.</Box>;
  }

  if (!user) {
    return <Box sx={{ p: 3 }}>로그인 후 프로필을 수정할 수 있습니다.</Box>;
  }

  return (
    <Box sx={{ display: "flex", flex: 1 }}>
      {/* Center */}
      <Box sx={{ flex: 1, maxWidth: 680, p: 3 }}>
        <Card sx={{ boxShadow: "0px 1px 1px rgba(0,0,0,0.05)" }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 3.5 }}>
              프로필 정보 수정
            </Typography>
            {error && (
              <Alert severity="error" onClose={() => setError("")} sx={{ mb: 2.5 }}>
                {error}
              </Alert>
            )}

            {/* Photo section */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 3.5 }}>
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  bgcolor: "primary.main",
                  fontSize: 24,
                  fontWeight: 700,
                }}
              >
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="프로필 미리보기"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  form.name.slice(0, 2).toUpperCase() || "AN"
                )}
              </Avatar>
              <Box>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ mb: 0.75 }}
                  onClick={() => fileInputRef.current?.click()}
                >
                  이미지 변경
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg"
                  onChange={handleFileChange}
                  hidden
                />
                <Typography variant="caption" color="text.disabled" display="block">
                  최대 2MB의 JPG, PNG 이미지를 지원합니다.
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ mb: 3.5 }} />

            {/* Profile fields */}
            <Stack spacing={2.5} sx={{ mb: 3.5 }}>
              <Stack spacing={0.75}>
                <Typography variant="body2" fontWeight={700}>
                  이름
                </Typography>
                <TextField
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  sx={{ "& .MuiInputBase-root": { bgcolor: "#fafafa" } }}
                />
              </Stack>
              <Stack spacing={0.75}>
                <Typography variant="body2" fontWeight={700}>
                  이메일 주소
                </Typography>
                <TextField
                  name="email"
                  value={form.email}
                  fullWidth
                  size="small"
                  disabled
                  sx={{ "& .MuiInputBase-root": { bgcolor: "#fafafa" } }}
                />
              </Stack>
              <Stack spacing={0.75}>
                <Typography variant="body2" fontWeight={700}>
                  자기소개
                </Typography>
                <TextField
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                  multiline
                  rows={3}
                  fullWidth
                  sx={{ "& .MuiInputBase-root": { bgcolor: "#fafafa" } }}
                />
              </Stack>
            </Stack>

            <Divider sx={{ mb: 3.5 }} />

            {/* Social fields */}
            <Stack spacing={2} sx={{ mb: 3.5 }}>
              <Typography variant="subtitle1" fontWeight={700}>
                소셜 및 웹사이트 링크
              </Typography>
              <Stack spacing={0.75}>
                <Typography variant="body2" fontWeight={700}>
                  GitHub 주소
                </Typography>
                <TextField
                  name="github"
                  value={form.github}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  sx={{ "& .MuiInputBase-root": { bgcolor: "#fafafa" } }}
                />
              </Stack>
              <Stack spacing={0.75}>
                <Typography variant="body2" fontWeight={700}>
                  개인 웹사이트 / 블로그
                </Typography>
                <TextField
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  fullWidth
                  size="small"
                  sx={{ "& .MuiInputBase-root": { bgcolor: "#fafafa" } }}
                />
              </Stack>
            </Stack>

            <Divider sx={{ mb: 3.5 }} />

            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1.5 }}>
              <Button
                variant="outlined"
                sx={{ borderColor: "#e0e0e0", color: "#666", px: 2.5, py: 1.25 }}
                onClick={() => navigate("/profile")}
              >
                취소
              </Button>
              <Button
                variant="contained"
                sx={{ px: 3, py: 1.25 }}
                onClick={handleSave}
                disabled={saving}
              >
                {saving ? "저장 중..." : "저장"}
              </Button>
            </Box>
            {error && (
              <Typography
                variant="caption"
                color="error"
                display="block"
                sx={{ mt: 1.5, textAlign: "right" }}
              >
                {error}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Box>

      {/* Right rail - Stats */}
      <Box sx={{ width: 280, flexShrink: 0, p: 3, display: { xs: "none", lg: "block" } }}>
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
          <CardContent sx={{ p: 2 }}>
            <Typography variant="body2" fontWeight={700} sx={{ mb: 1.5 }}>
              Personal Stats
            </Typography>
            <Stack direction="row" spacing={2}>
              <Box>
                <Typography variant="h6" color="primary.main" fontWeight={700} lineHeight={1.2}>
                  {postCount}
                </Typography>
                <Typography variant="caption" color="text.secondary" fontSize={11}>
                  POSTS
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
      <Snackbar
        open={successOpen}
        autoHideDuration={3000}
        onClose={() => setSuccessOpen(false)}
        message={
          selectedFile
            ? "프로필 이미지 업로드와 저장이 완료되었습니다."
            : "프로필 저장이 완료되었습니다."
        }
      />
    </Box>
  );
}
