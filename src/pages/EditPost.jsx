import { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, TextField, Button, Stack } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../contexts/AuthContext";

export default function EditPost() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [form, setForm] = useState({ title: "", content: "" });
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "posts", postId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setPost(data);

          // 작성자 확인
          if (user?.uid !== data.authorId) {
            alert("본인의 글만 수정할 수 있습니다.");
            navigate("/");
            return;
          }

          setForm({
            title: data.title || "",
            content: data.content || "",
          });
        } else {
          alert("게시글을 찾을 수 없습니다.");
          navigate("/");
        }
      } catch (error) {
        console.error("게시글 조회 실패:", error);
        alert("게시글 조회에 실패했습니다.");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId, user, navigate]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.title.trim() || !form.content.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    try {
      const docRef = doc(db, "posts", postId);
      await updateDoc(docRef, {
        title: form.title,
        content: form.content,
      });
      alert("게시글이 수정되었습니다.");
      navigate(`/posts/${postId}`);
    } catch (error) {
      console.error("수정 실패:", error);
      alert("게시글 수정에 실패했습니다.");
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Typography>로딩 중...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flex: 1 }}>
      <Box sx={{ flex: 1, maxWidth: 680, p: 3 }}>
        <Typography variant="h6" fontWeight={700} sx={{ mb: 2.5 }}>
          게시글 수정
        </Typography>

        <Card sx={{ boxShadow: "0px 1px 1px rgba(0,0,0,0.05)" }}>
          <CardContent sx={{ p: 3 }}>
            <Stack spacing={2.5}>
              <Stack spacing={0.75}>
                <Typography variant="body2" fontWeight={500} color="text.secondary">
                  제목
                </Typography>
                <TextField
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              </Stack>

              <Stack spacing={0.75}>
                <Typography variant="body2" fontWeight={500} color="text.secondary">
                  내용
                </Typography>
                <TextField
                  name="content"
                  value={form.content}
                  onChange={handleChange}
                  multiline
                  rows={8}
                  fullWidth
                />
              </Stack>

              {/* Current image */}
              <Stack spacing={0.75}>
                <Typography variant="body2" fontWeight={500} color="text.secondary">
                  현재 대표 이미지
                </Typography>
                <Box
                  sx={{
                    bgcolor: "#e0e0e0",
                    height: 140,
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    [ mui_grid_guide_thumbnail.png ]
                  </Typography>
                  <Button
                    size="small"
                    sx={{
                      color: "#d32f2f",
                      border: "1px solid #d32f2f",
                      bgcolor: "#e0e0e0",
                      px: 1,
                      py: 0.5,
                      fontSize: 12,
                    }}
                  >
                    삭제
                  </Button>
                </Box>
              </Stack>

              {/* New upload */}
              <Stack spacing={0.75}>
                <Typography variant="body2" fontWeight={500} color="text.secondary">
                  새 이미지 업로드
                </Typography>
                <Box
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
                  }}
                >
                  <CloudUpload sx={{ color: "primary.main", fontSize: 32 }} />
                  <Typography variant="body2" fontWeight={500} color="text.secondary">
                    클릭하여 이미지 업로드
                  </Typography>
                </Box>
              </Stack>

              <Box sx={{ display: "flex", justifyContent: "space-between", pt: 1.5 }}>
                <Button sx={{ color: "#666" }} onClick={() => navigate(-1)}>
                  취소
                </Button>
                <Button variant="contained" sx={{ px: 2.5, py: 1.25 }} onClick={handleSubmit}>
                  수정
                </Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
