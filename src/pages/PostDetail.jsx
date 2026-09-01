import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  Divider,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import { Favorite, FavoriteBorder, ChatBubbleOutlineRounded, Share } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const getInitials = (name = "") => {
  const trimmed = name.trim();
  if (!trimmed) return "AN";

  const words = trimmed.split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();

  return (words[0][0] + words[1][0]).toUpperCase();
};

export default function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) {
        alert("잘못된 게시글 경로입니다.");
        navigate("/404");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        const postRef = doc(db, "posts", postId);
        const docSnap = await getDoc(postRef);

        if (!docSnap.exists()) {
          alert("존재하지 않는 게시글입니다.");
          setPost(null);
          setComments([]);
          navigate("/404");
          return;
        }

        const data = docSnap.data();
        const createdAt = data.createdAt?.toDate ? data.createdAt.toDate() : new Date();

        const postData = {
          id: docSnap.id,
          title: data.title || "",
          content: data.content || "",
          fullContent: data.content || "",
          topic: data.topic || "",
          author: {
            id: data.authorId || "",
            name: data.authorName || "익명",
            initials: getInitials(data.authorName || "익명"),
          },
          likes: Number(data.likes || 0),
          comments: Array.isArray(data.comments) ? data.comments : [],
          createdAt: createdAt.toLocaleString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          }),
          readTime: "5분 소요",
        };

        setPost(postData);
        setComments(postData.comments);
      } catch (error) {
        console.error("게시글 상세 조회 실패:", error);
        alert("게시글을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.");
        navigate("/404");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId, navigate]);

  const handleComment = () => {
    if (!comment.trim()) return;
    setComments([
      ...comments,
      { id: Date.now(), author: "현재 사용자", initials: "ME", content: comment },
    ]);
    setComment("");
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center", p: 3 }}>
        <Typography variant="body1" color="text.secondary">
          게시글을 불러오는 중입니다...
        </Typography>
      </Box>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <Box sx={{ display: "flex", flex: 1 }}>
      <Box sx={{ flex: 1, maxWidth: 680, p: 3 }}>
        <Card sx={{ boxShadow: "0px 1px 1px rgba(0,0,0,0.05)" }}>
          <CardContent sx={{ p: 3 }}>
            {/* Author row */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
              <Avatar sx={{ width: 40, height: 40, bgcolor: "primary.main", fontWeight: 700 }}>
                {post.author.initials}
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1" fontWeight={700}>
                  {post.author.name}
                </Typography>
                <Typography variant="caption" color="text.disabled">
                  {post.createdAt} · {post.readTime}
                </Typography>
              </Box>
              <IconButton size="small">
                <Share sx={{ fontSize: 18, color: "#666" }} />
              </IconButton>
            </Box>

            {/* Title */}
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
              {post.title}
            </Typography>

            {/* Image */}
            <Box sx={{ bgcolor: "#e0e0e0", height: 300, borderRadius: 1, mb: 2.5 }} />

            {/* Body */}
            <Stack spacing={2} sx={{ mb: 2.5 }}>
              {post.fullContent.split("\n\n").map((para, i) => (
                <Typography key={i} variant="body1" color="text.primary" lineHeight={1.6}>
                  {para}
                </Typography>
              ))}
            </Stack>

            {/* Stats */}
            <Box sx={{ display: "flex", gap: 2.5, mb: 2.5 }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 0.75, cursor: "pointer" }}
                onClick={() => setLiked(!liked)}
              >
                {liked ? (
                  <Favorite sx={{ fontSize: 18, color: "primary.main" }} />
                ) : (
                  <FavoriteBorder sx={{ fontSize: 18, color: "#666" }} />
                )}
                <Typography variant="body2" color={liked ? "primary.main" : "text.primary"}>
                  좋아요 {post.likes + (liked ? 1 : 0)}개
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                <ChatBubbleOutlineRounded sx={{ fontSize: 18, color: "#666" }} />
                <Typography variant="body2">댓글 {comments.length}개</Typography>
              </Box>
            </Box>

            <Divider sx={{ mb: 2.5 }} />

            {/* Comments */}
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2 }}>
              댓글
            </Typography>
            <Stack spacing={2} sx={{ mb: 2.5 }}>
              {comments.map(c => (
                <Box key={c.id} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: "#e0e0e0",
                      color: "#666",
                      fontSize: 11,
                      fontWeight: 700,
                    }}
                  >
                    {c.initials}
                  </Avatar>
                  <Box sx={{ flex: 1, bgcolor: "#f5f5f5", borderRadius: 1, p: 1.5 }}>
                    <Typography variant="body2" fontWeight={700} sx={{ mb: 0.5 }}>
                      {c.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.4}>
                      {c.content}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>

            {/* Comment input */}
            <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
              <TextField
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder="댓글을 입력하세요..."
                fullWidth
                size="small"
                onKeyDown={e => e.key === "Enter" && handleComment()}
              />
              <Button
                variant="contained"
                sx={{ height: 40, flexShrink: 0 }}
                onClick={handleComment}
              >
                등록
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
