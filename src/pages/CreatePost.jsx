import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  Stack,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { topics } from "../data/mockData";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase";
import { useAuth } from "../contexts/AuthContext";

export default function CreatePost() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [form, setForm] = useState({ title: "", topic: "", content: "" });
  const [preview, setPreview] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = e => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("이미지 파일만 선택할 수 있습니다.");
      return;
    }

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    setError("");
  };

  const handleSubmit = async () => {
    const title = form.title.trim();
    const topic = form.topic.trim();
    const content = form.content.trim();

    if (!title || !topic || !content) {
      return;
    }

    if (!user) {
      console.error("로그인된 사용자가 없어 게시글을 저장할 수 없습니다.");
      return;
    }

    setUploading(true);
    setError("");

    try {
      let imageUrl = "";
      let imagePath = "";

      if (selectedFile) {
        const extension = selectedFile.name.split(".").pop() || "jpg";
        const fileName = `${Date.now()}_${Math.random().toString(36).slice(2)}.${extension}`;
        imagePath = `posts/${fileName}`;
        const imageRef = ref(storage, imagePath);
        await uploadBytes(imageRef, selectedFile);
        imageUrl = await getDownloadURL(imageRef);
      }

      await addDoc(collection(db, "posts"), {
        title,
        topic,
        content,
        imageUrl,
        imagePath,
        authorId: user.uid,
        authorName: user.displayName || "",
        createdAt: serverTimestamp(),
      });

      setForm({ title: "", topic: "", content: "" });
      navigate("/");
    } catch (error) {
      console.error("게시글 저장 실패:", error);
      setError("이미지 업로드 또는 게시글 등록에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box sx={{ display: "flex", flex: 1 }}>
      <Box sx={{ flex: 1, maxWidth: 680, p: 3 }}>
        <Typography variant="h6" fontWeight={700} sx={{ mb: 2.5 }}>
          새 게시글 작성
        </Typography>

        <Card sx={{ boxShadow: "0px 1px 1px rgba(0,0,0,0.05)" }}>
          <CardContent sx={{ p: 3 }}>
            <Stack spacing={2.5}>
              {/* Title */}
              <Stack spacing={0.75}>
                <Typography variant="caption" fontWeight={500} color="text.secondary">
                  제목
                </Typography>
                <TextField
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Getting Started with MUI Components"
                  fullWidth
                  size="small"
                />
              </Stack>

              {/* Topic */}
              <Stack spacing={0.75}>
                <Typography variant="caption" fontWeight={500} color="text.secondary">
                  주제 선택
                </Typography>
                <FormControl fullWidth size="small">
                  <Select
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    displayEmpty
                    renderValue={v => v || <span style={{ color: "#666" }}>주제를 선택하세요</span>}
                  >
                    {topics
                      .filter(t => t !== "전체")
                      .map(t => (
                        <MenuItem key={t} value={t}>
                          {t}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Stack>

              {/* Content */}
              <Stack spacing={0.75}>
                <Typography variant="caption" fontWeight={500} color="text.secondary">
                  내용
                </Typography>
                <TextField
                  name="content"
                  value={form.content}
                  onChange={handleChange}
                  multiline
                  rows={8}
                  fullWidth
                  placeholder="내용을 입력하세요..."
                />
              </Stack>

              {/* Image upload */}
              <Stack spacing={0.75}>
                <Typography variant="caption" fontWeight={500} color="text.secondary">
                  대표 이미지
                </Typography>
                <Box
                  component="label"
                  htmlFor="post-image"
                  sx={{
                    bgcolor: "#f5f5f5",
                    border: "1px dashed #e0e0e0",
                    borderRadius: 1,
                    height: 120,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#eeeeee" },
                  }}
                >
                  {preview ? (
                    <Box
                      component="img"
                      src={preview}
                      alt="게시글 이미지 미리보기"
                      sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 1 }}
                    />
                  ) : (
                    <>
                      <CloudUpload sx={{ color: "primary.main", fontSize: 32 }} />
                      <Typography variant="body2" fontWeight={500} color="text.secondary">
                        클릭하여 이미지 업로드
                      </Typography>
                    </>
                  )}
                </Box>
                <input
                  id="post-image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  hidden
                />
                {error && (
                  <Typography variant="caption" color="error">
                    {error}
                  </Typography>
                )}
              </Stack>

              {/* Buttons */}
              <Box sx={{ display: "flex", justifyContent: "space-between", pt: 1.5 }}>
                <Button sx={{ color: "#666" }} onClick={() => navigate(-1)}>
                  취소
                </Button>
                <Button
                  variant="contained"
                  sx={{ px: 2.5, py: 1.25 }}
                  onClick={handleSubmit}
                  disabled={uploading}
                >
                  {uploading ? "업로드 중..." : "등록"}
                </Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
