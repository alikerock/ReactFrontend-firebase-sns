import { Box, Card, CardContent, Typography, Avatar, Button, Divider, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import { db } from "../../firebase";
import { useAuth } from "../contexts/AuthContext";

const getInitials = (name = "") => {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "AN";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0]}${words[1][0]}`.toUpperCase();
};

const formatDate = value => {
  if (!value) return "가입일 정보 없음";
  const date = value.toDate ? value.toDate() : new Date(value);
  if (Number.isNaN(date.getTime())) return "가입일 정보 없음";
  return date.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
};

const toPost = postDoc => {
  const data = postDoc.data();
  const createdAt = data.createdAt?.toDate ? data.createdAt.toDate() : new Date();
  const authorName = data.authorName || "익명";

  return {
    id: postDoc.id,
    title: data.title || "",
    content: data.content || "",
    imageUrl: data.imageUrl || "",
    imagePath: data.imagePath || data.imageUrl || "",
    topic: data.topic || "",
    author: {
      id: data.authorId || "",
      name: authorName,
      initials: getInitials(authorName),
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
  };
};

export default function Profile() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [postCount, setPostCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      setRecentPosts([]);
      setPostCount(0);
      setLoading(false);
      return undefined;
    }

    setLoading(true);
    const unsubscribeProfile = onSnapshot(
      doc(db, "users", user.uid),
      snapshot => {
        setProfile(snapshot.exists() ? snapshot.data() : {});
        setLoading(false);
      },
      error => {
        console.error("프로필 조회 실패:", error);
        setProfile({});
        setLoading(false);
      },
    );

    const postsQuery = query(collection(db, "posts"), where("authorId", "==", user.uid));
    const unsubscribePosts = onSnapshot(
      postsQuery,
      snapshot => {
        const sortedPosts = [...snapshot.docs].sort((first, second) => {
          const firstTime = first.data().createdAt?.toMillis?.() || 0;
          const secondTime = second.data().createdAt?.toMillis?.() || 0;
          return secondTime - firstTime;
        });
        setPostCount(snapshot.size);
        setRecentPosts(sortedPosts.slice(0, 3).map(toPost));
      },
      error => {
        console.error("내 게시글 조회 실패:", error);
        setRecentPosts([]);
        setPostCount(0);
      },
    );

    return () => {
      unsubscribeProfile();
      unsubscribePosts();
    };
  }, [user]);

  if (authLoading || loading) {
    return <Box sx={{ p: 3 }}>프로필 정보를 불러오는 중입니다.</Box>;
  }

  if (!user) {
    return <Box sx={{ p: 3 }}>로그인 후 프로필을 확인할 수 있습니다.</Box>;
  }

  const displayName = profile?.displayName || user.displayName || "이름 없음";
  const email = profile?.email || user.email || "이메일 정보 없음";
  const initials = getInitials(displayName);
  const joinDate = formatDate(profile?.createdAt || user.metadata?.creationTime);
  const bio = profile?.bio || "등록된 자기소개가 없습니다.";

  return (
    <Box sx={{ display: "flex", flex: 1 }}>
      {/* Center */}
      <Box sx={{ flex: 1, maxWidth: 680, p: 3 }}>
        {/* Profile header card */}
        <Card sx={{ mb: 3, boxShadow: "0px 1px 1px rgba(0,0,0,0.05)" }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 2.5 }}>
              <Avatar
                src={profile?.photoURL || user.photoURL || undefined}
                alt={`${displayName} 프로필 이미지`}
                sx={{
                  width: 80,
                  height: 80,
                  bgcolor: "primary.main",
                  fontSize: 24,
                  fontWeight: 700,
                }}
              >
                {initials}
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight={700}>
                  {displayName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {email}
                </Typography>
                <Typography variant="caption" color="text.disabled">
                  {joinDate} 가입
                </Typography>
              </Box>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderColor: "primary.main",
                  color: "primary.main",
                  fontWeight: 700,
                  fontSize: 13,
                  px: 2,
                }}
                onClick={() => navigate("/profile/edit")}
              >
                프로필 수정
              </Button>
            </Box>

            <Divider sx={{ mb: 2.5 }} />

            <Box>
              <Typography variant="body2" fontWeight={700} sx={{ mb: 0.75 }}>
                About Me
              </Typography>
              <Typography variant="body2" color="text.secondary" lineHeight={1.6}>
                {bio}
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
          최근 게시글
        </Typography>
        <Stack spacing={3}>
          {recentPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
          {recentPosts.length === 0 && (
            <Typography variant="body2" color="text.secondary">
              작성한 게시글이 없습니다.
            </Typography>
          )}
        </Stack>
      </Box>

      {/* Right rail */}
      <Box sx={{ width: 280, flexShrink: 0, p: 3, display: { xs: "none", lg: "block" } }}>
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
          <CardContent sx={{ p: 2 }}>
            <Typography variant="body2" fontWeight={700} sx={{ mb: 1.5 }}>
              게시글 수
            </Typography>
            <Typography variant="h6" color="primary.main" fontWeight={700} lineHeight={1.2}>
              {postCount}
            </Typography>
            <Typography variant="caption" color="text.secondary" fontSize={11}>
              POSTS
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
