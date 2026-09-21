import { useEffect, useState } from "react";
import {
  Alert,
  Card,
  CardContent,
  Box,
  Avatar,
  Typography,
  Button,
  IconButton,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  Bookmark,
  BookmarkBorder,
  ChatBubbleOutlineRounded,
  EditOutlined,
  DeleteOutlineRounded,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { db, storage } from "../../firebase";

export default function PostCard({ post }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [likeCount, setLikeCount] = useState(Number(post.likes || 0));
  const [liked, setLiked] = useState(false);
  const [likeSaving, setLikeSaving] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [bookmarkSaving, setBookmarkSaving] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [feedback, setFeedback] = useState({ message: "", severity: "error" });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const isOwner = user?.uid === post.author.id;

  useEffect(() => {
    const likesRef = collection(db, "posts", post.id, "likes");
    const unsubscribe = onSnapshot(
      likesRef,
      snapshot => {
        setLikeCount(snapshot.size);
        setLiked(Boolean(user?.uid && snapshot.docs.some(likeDoc => likeDoc.id === user.uid)));
      },
      error => {
        console.error("좋아요 조회 실패:", error);
      },
    );

    return unsubscribe;
  }, [post.id, user?.uid]);

  useEffect(() => {
    setBookmarked(false);
    if (!user?.uid) return undefined;

    const bookmarkRef = doc(db, "posts", post.id, "bookmarks", user.uid);
    const unsubscribe = onSnapshot(
      bookmarkRef,
      snapshot => setBookmarked(snapshot.exists()),
      error => console.error("북마크 조회 실패:", error),
    );

    return unsubscribe;
  }, [post.id, user?.uid]);

  const handleLike = async e => {
    e.stopPropagation();
    if (!user) {
      setFeedback({ message: "로그인한 사용자만 좋아요를 누를 수 있습니다.", severity: "warning" });
      return;
    }

    const likeRef = doc(db, "posts", post.id, "likes", user.uid);
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
      setSnackbarOpen(true);
    } catch (error) {
      setLiked(!nextLiked);
      setLikeCount(currentCount => currentCount + (nextLiked ? -1 : 1));
      console.error("좋아요 처리 실패:", error);
      setFeedback({
        message: "좋아요 처리에 실패했습니다. 잠시 후 다시 시도해주세요.",
        severity: "error",
      });
    } finally {
      setLikeSaving(false);
    }
  };

  const handleBookmark = async e => {
    e.stopPropagation();
    if (!user) {
      setFeedback({ message: "로그인한 사용자만 북마크할 수 있습니다.", severity: "warning" });
      return;
    }

    const bookmarkRef = doc(db, "posts", post.id, "bookmarks", user.uid);
    const nextBookmarked = !bookmarked;
    setBookmarkSaving(true);
    setBookmarked(nextBookmarked);

    try {
      if (nextBookmarked) {
        await setDoc(bookmarkRef, { uid: user.uid, createdAt: serverTimestamp() });
      } else {
        await deleteDoc(bookmarkRef);
      }
    } catch (error) {
      setBookmarked(!nextBookmarked);
      console.error("북마크 처리 실패:", error);
      setFeedback({
        message: "북마크 처리에 실패했습니다. 잠시 후 다시 시도해주세요.",
        severity: "error",
      });
    } finally {
      setBookmarkSaving(false);
    }
  };

  const handleEdit = e => {
    e.stopPropagation();
    navigate(`/posts/${post.id}/edit`);
  };

  const handleDelete = async e => {
    e.stopPropagation();
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    setDeleting(true);
    try {
      const imagePath = post.imagePath || post.imageUrl;

      if (imagePath) {
        try {
          await deleteObject(ref(storage, imagePath));
        } catch (error) {
          if (error.code !== "storage/object-not-found") {
            console.error("게시글 이미지 삭제 실패:", error);
            throw error;
          }
        }
      }

      await deleteDoc(doc(db, "posts", post.id));
      navigate("/");
    } catch (error) {
      console.error("삭제 실패:", error);
      setFeedback({
        message: "게시글 삭제에 실패했습니다. 잠시 후 다시 시도해주세요.",
        severity: "error",
      });
    } finally {
      setDeleting(false);
      setDeleteDialogOpen(false);
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
        {feedback.message && (
          <Alert
            severity={feedback.severity}
            onClose={() => setFeedback({ message: "", severity: "error" })}
            sx={{ mb: 2 }}
          >
            {feedback.message}
          </Alert>
        )}
        {/* Author row */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
          <Avatar
            src={post.author.photoURL || undefined}
            alt={`${post.author.name} 프로필 이미지`}
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

        {/* Image */}
        {post.imageUrl && (
          <Box
            component="img"
            src={post.imageUrl}
            alt={`${post.title} 이미지`}
            sx={{
              display: "block",
              width: "100%",
              maxWidth: "100%",
              height: 180,
              objectFit: "cover",
              borderRadius: 1,
              mb: 2,
            }}
          />
        )}

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
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.25 }}>
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
              <Typography variant="body2" color="text.secondary">
                {likeCount}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <ChatBubbleOutlineRounded sx={{ fontSize: 18, color: "#666" }} />
              <Typography variant="body2" color="text.secondary">
                댓글 {post.commentCount ?? post.comments.length}개
              </Typography>
            </Box>
            <IconButton
              size="small"
              aria-label={bookmarked ? "북마크 해제" : "북마크"}
              disabled={bookmarkSaving}
              onClick={handleBookmark}
              sx={{ p: 0.5, color: bookmarked ? "primary.main" : "#666" }}
            >
              {bookmarked ? (
                <Bookmark sx={{ fontSize: 18 }} />
              ) : (
                <BookmarkBorder sx={{ fontSize: 18 }} />
              )}
            </IconButton>
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
                disabled={deleting}
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
      <Dialog open={deleteDialogOpen} onClose={() => !deleting && setDeleteDialogOpen(false)}>
        <DialogTitle>게시글을 삭제하시겠습니까?</DialogTitle>
        <DialogContent>삭제한 게시글과 대표 이미지는 복구할 수 없습니다.</DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)} disabled={deleting}>
            취소
          </Button>
          <Button
            onClick={handleDeleteConfirm}
            color="error"
            variant="contained"
            disabled={deleting}
          >
            {deleting ? "삭제 중..." : "삭제"}
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="좋아요 처리가 완료되었습니다."
      />
    </Card>
  );
}
