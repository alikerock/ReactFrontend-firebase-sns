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
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../contexts/AuthContext";

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
  const { user } = useAuth();
  const [post, setPost] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [commentsError, setCommentsError] = useState("");
  const [commentSaving, setCommentSaving] = useState(false);
  const [likeSaving, setLikeSaving] = useState(false);

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
          imageUrl: data.imageUrl || "",
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

  useEffect(() => {
    if (!postId) return undefined;

    const likesRef = collection(db, "posts", postId, "likes");
    const unsubscribe = onSnapshot(
      likesRef,
      snapshot => {
        setLiked(Boolean(user?.uid && snapshot.docs.some(likeDoc => likeDoc.id === user.uid)));
        setLikeCount(snapshot.size);
      },
      error => {
        console.error("좋아요 조회 실패:", error);
      },
    );

    return unsubscribe;
  }, [postId, user?.uid]);

  useEffect(() => {
    if (!postId) {
      setCommentsLoading(false);
      return undefined;
    }

    setCommentsLoading(true);
    setCommentsError("");

    const commentsQuery = query(
      collection(db, "comments"),
      where("postId", "==", postId),
      orderBy("createdAt", "asc"),
    );

    const unsubscribe = onSnapshot(
      commentsQuery,
      snapshot => {
        setComments(
          snapshot.docs.map(commentDoc => {
            const data = commentDoc.data();
            const displayName = data.displayName || "익명";

            return {
              id: commentDoc.id,
              uid: data.uid || "",
              author: displayName,
              initials: getInitials(displayName),
              photoURL: data.photoURL || "",
              content: data.content || "",
            };
          }),
        );
        setCommentsLoading(false);
      },
      error => {
        console.error("댓글 실시간 조회 실패:", error);
        setCommentsError("댓글을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.");
        setCommentsLoading(false);
      },
    );

    return () => unsubscribe();
  }, [postId]);

  const handleComment = async () => {
    if (!user) {
      alert("로그인한 사용자만 댓글을 작성할 수 있습니다.");
      return;
    }

    const trimmedComment = comment.trim();
    if (!trimmedComment || !postId) return;

    setCommentSaving(true);

    try {
      const displayName = user.displayName || user.email || "익명";
      const commentRef = await addDoc(collection(db, "comments"), {
        postId,
        uid: user.uid,
        displayName,
        photoURL: user.photoURL || "",
        content: trimmedComment,
        createdAt: serverTimestamp(),
      });

      console.log("댓글 등록 완료:", commentRef.id);
      setComment("");
    } catch (error) {
      console.error("댓글 등록 실패:", error);
      alert("댓글 등록에 실패했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setCommentSaving(false);
    }
  };

  const handleLike = async () => {
    if (!user) {
      alert("로그인한 사용자만 좋아요를 누를 수 있습니다.");
      return;
    }

    const likeRef = doc(db, "posts", postId, "likes", user.uid);
    const nextLiked = !liked;
    setLikeSaving(true);
    setLiked(nextLiked);
    setLikeCount(currentCount => currentCount + (nextLiked ? 1 : -1));

    try {
      if (nextLiked) {
        await setDoc(likeRef, { uid: user.uid, createdAt: serverTimestamp() });
      } else {
        await deleteDoc(likeRef);
      }
    } catch (error) {
      setLiked(!nextLiked);
      setLikeCount(currentCount => currentCount + (nextLiked ? -1 : 1));
      console.error("좋아요 처리 실패:", error);
      alert("좋아요 처리에 실패했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setLikeSaving(false);
    }
  };

  const handleDeleteComment = async commentItem => {
    if (!user || user.uid !== commentItem.uid) return;
    if (!window.confirm("이 댓글을 삭제하시겠습니까?")) return;

    try {
      await deleteDoc(doc(db, "comments", commentItem.id));
    } catch (error) {
      console.error("댓글 삭제 실패:", error);
      alert("댓글 삭제에 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
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
            {post.imageUrl && (
              <Box
                component="img"
                src={post.imageUrl}
                alt={`${post.title} 이미지`}
                sx={{
                  display: "block",
                  width: "100%",
                  height: 300,
                  objectFit: "cover",
                  borderRadius: 1,
                  mb: 2.5,
                }}
              />
            )}

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
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                <IconButton
                  size="small"
                  aria-label={liked ? "좋아요 취소" : "좋아요"}
                  disabled={likeSaving}
                  onClick={handleLike}
                  sx={{ p: 0.5, color: liked ? "primary.main" : "#666" }}
                >
                  {liked ? (
                    <Favorite sx={{ fontSize: 18 }} />
                  ) : (
                    <FavoriteBorder sx={{ fontSize: 18 }} />
                  )}
                </IconButton>
                <Typography variant="body2" color={liked ? "primary.main" : "text.primary"}>
                  좋아요 {likeCount}개
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
              {commentsLoading ? (
                <Typography variant="body2" color="text.secondary">
                  댓글을 불러오는 중입니다...
                </Typography>
              ) : commentsError ? (
                <Typography variant="body2" color="error">
                  {commentsError}
                </Typography>
              ) : comments.length === 0 ? (
                <Typography variant="body2" color="text.secondary">
                  아직 작성된 댓글이 없습니다.
                </Typography>
              ) : (
                comments.map(c => (
                  <Box key={c.id} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                    <Avatar
                      src={c.photoURL || undefined}
                      alt={`${c.author} 프로필 이미지`}
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
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="body2" fontWeight={700} sx={{ mb: 0.5 }}>
                          {c.author}
                        </Typography>
                        {user?.uid === c.uid && (
                          <Button
                            size="small"
                            color="error"
                            onClick={() => handleDeleteComment(c)}
                            sx={{ minWidth: 0, p: 0, fontSize: 12 }}
                          >
                            삭제
                          </Button>
                        )}
                      </Box>
                      <Typography variant="body2" color="text.secondary" lineHeight={1.4}>
                        {c.content}
                      </Typography>
                    </Box>
                  </Box>
                ))
              )}
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
                disabled={commentSaving}
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
