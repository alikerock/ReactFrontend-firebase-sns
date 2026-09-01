import { Card, CardContent, Box, Avatar, Typography, Button } from "@mui/material";
import {
  FavoriteBorder,
  ChatBubbleOutlineRounded,
  EditOutlined,
  DeleteOutlineRounded,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function PostCard({ post }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const isOwner = user?.uid === post.author.id;

  const handleEdit = e => {
    e.stopPropagation();
    navigate(`/posts/${post.id}/edit`);
  };

  const handleDelete = async e => {
    e.stopPropagation();
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        await deleteDoc(doc(db, "posts", post.id));
      } catch (error) {
        console.error("삭제 실패:", error);
        alert("게시글 삭제에 실패했습니다.");
      }
    }
  };

  return (
    <Card
      sx={{
        cursor: "pointer",
        "&:hover": { boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
        transition: "box-shadow 0.2s",
      }}
      onClick={() => navigate(`/posts/${post.id}`)}
    >
      <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
        {/* Author row */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
          <Avatar
            sx={{ width: 36, height: 36, bgcolor: "primary.main", fontSize: 12, fontWeight: 700 }}
          >
            {post.author.initials}
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" fontWeight={700} color="text.primary" lineHeight={1.3}>
              {post.author.name}
            </Typography>
            <Typography variant="caption" color="text.disabled">
              {post.createdAt}
            </Typography>
          </Box>
        </Box>

        {/* Content */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            color="text.primary"
            sx={{ mb: 1, lineHeight: 1.4 }}
          >
            {post.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.6,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {post.content}
          </Typography>
        </Box>

        {/* Image placeholder */}
        <Box sx={{ bgcolor: "#e0e0e0", height: 180, borderRadius: 1, mb: 2 }} />

        {/* Footer */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            mt: 1,
          }}
        >
          <Box sx={{ display: "flex", gap: 3 }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 0.75 }}
              onClick={e => e.stopPropagation()}
            >
              <FavoriteBorder sx={{ fontSize: 18, color: "#666" }} />
              <Typography variant="body2" color="text.secondary">
                {post.likes}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <ChatBubbleOutlineRounded sx={{ fontSize: 18, color: "#666" }} />
              <Typography variant="body2" color="text.secondary">
                댓글 {post.comments.length}개
              </Typography>
            </Box>
          </Box>

          {isOwner && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                startIcon={<EditOutlined sx={{ fontSize: 16 }} />}
                onClick={handleEdit}
                sx={{
                  minWidth: 0,
                  px: 1.25,
                  py: 0.5,
                  borderRadius: 1,
                  fontWeight: 600,
                }}
              >
                수정
              </Button>
              <Button
                size="small"
                variant="outlined"
                color="error"
                startIcon={<DeleteOutlineRounded sx={{ fontSize: 16 }} />}
                onClick={handleDelete}
                sx={{
                  minWidth: 0,
                  px: 1.25,
                  py: 0.5,
                  borderRadius: 1,
                  fontWeight: 600,
                }}
              >
                삭제
              </Button>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
