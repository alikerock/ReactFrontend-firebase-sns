import { useEffect, useState } from "react";
import { Add } from "@mui/icons-material";
import { Box, Button, Fab, Stack, Typography } from "@mui/material";
import { collection, doc, getDoc, onSnapshot, query, where } from "firebase/firestore";
import { useNavigate, useSearchParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import { db } from "../../firebase";
import { useAuth } from "../contexts/AuthContext";

const PAGE_SIZE = 10;
const PAGE_GROUP_SIZE = 5;

const getInitials = (name = "") => {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "AN";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0]}${words[1][0]}`.toUpperCase();
};

const toPost = postDoc => {
  const data = postDoc.data();
  const createdAt = data.createdAt?.toDate ? data.createdAt.toDate() : null;
  const authorName = data.authorName || "익명";

  return {
    id: postDoc.id,
    title: data.title || "",
    content: data.content || "",
    imageUrl: data.imageUrl || "",
    imagePath: data.imagePath || data.imageUrl || "",
    topic: data.topic || "",
    author: {
      id: data.authorId || data.uid || "",
      name: authorName,
      initials: getInitials(authorName),
      photoURL: data.authorPhotoURL || data.photoURL || "",
    },
    likes: Number(data.likes || 0),
    comments: Array.isArray(data.comments) ? data.comments : [],
    createdAt: createdAt
      ? createdAt.toLocaleString("ko-KR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "작성 시간 정보 없음",
    createdAtValue: createdAt?.getTime() || 0,
  };
};

export default function MyPosts() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { user, loading: authLoading } = useAuth();
  const [posts, setPosts] = useState([]);
  const [profilePhotoURL, setProfilePhotoURL] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const pageParam = Number(searchParams.get("page"));
  const currentPage = Number.isInteger(pageParam) && pageParam > 0 ? pageParam : 1;
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const firstPageInGroup = Math.floor((currentPage - 1) / PAGE_GROUP_SIZE) * PAGE_GROUP_SIZE + 1;
  const pageNumbers = Array.from(
    { length: Math.min(PAGE_GROUP_SIZE, totalPages - firstPageInGroup + 1) },
    (_, index) => firstPageInGroup + index,
  );
  const nextGroupPage = firstPageInGroup + PAGE_GROUP_SIZE;
  const visiblePosts = posts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  useEffect(() => {
    if (authLoading) return undefined;

    if (!user) {
      navigate("/login", { replace: true });
      return undefined;
    }

    setLoading(true);
    setError("");

    getDoc(doc(db, "users", user.uid))
      .then(snapshot => {
        setProfilePhotoURL(snapshot.data()?.photoURL || user.photoURL || "");
      })
      .catch(profileError => {
        console.error("프로필 이미지 조회 실패:", profileError);
        setProfilePhotoURL(user.photoURL || "");
      });

    const postsQuery = query(collection(db, "posts"), where("authorId", "==", user.uid));
    const unsubscribe = onSnapshot(
      postsQuery,
      snapshot => {
        const postList = snapshot.docs
          .map(toPost)
          .sort((first, second) => second.createdAtValue - first.createdAtValue);
        setPosts(postList);
        setLoading(false);
      },
      snapshotError => {
        console.error("내 게시글 조회 실패:", snapshotError);
        setPosts([]);
        setError("게시글을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.");
        setLoading(false);
      },
    );

    return unsubscribe;
  }, [authLoading, navigate, user]);

  useEffect(() => {
    if (user && currentPage > totalPages) {
      setSearchParams(totalPages === 1 ? {} : { page: String(totalPages) }, { replace: true });
    }
  }, [currentPage, setSearchParams, totalPages, user]);

  const changePage = (page, replace = false) => {
    setSearchParams(page === 1 ? {} : { page: String(page) }, { replace });
  };

  if (authLoading || !user) {
    return <Box sx={{ p: 3 }}>로그인 정보를 확인하는 중입니다.</Box>;
  }

  return (
    <Box sx={{ display: "flex", flex: 1 }}>
      <Box sx={{ flex: 1, maxWidth: 680, p: 3 }}>
        <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
          내 게시글
        </Typography>

        {loading ? (
          <Typography color="text.secondary">게시글을 불러오는 중입니다.</Typography>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : posts.length === 0 ? (
          <Stack spacing={0.5}>
            <Typography color="text.secondary">아직 작성한 게시글이 없습니다.</Typography>
            <Typography variant="body2" color="text.secondary">
              첫 번째 글을 작성해 보세요!
            </Typography>
          </Stack>
        ) : (
          <Stack spacing={3}>
            {visiblePosts.map(post => (
              <PostCard
                key={post.id}
                post={{
                  ...post,
                  author: {
                    ...post.author,
                    photoURL: post.author.photoURL || profilePhotoURL,
                  },
                }}
              />
            ))}
          </Stack>
        )}

        {!loading && !error && posts.length > 0 && (
          <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 4 }}>
            <Button
              variant="outlined"
              disabled={firstPageInGroup === 1}
              onClick={() => changePage(Math.max(1, firstPageInGroup - PAGE_GROUP_SIZE))}
            >
              이전
            </Button>
            {pageNumbers.map(page => (
              <Button
                key={page}
                variant={currentPage === page ? "contained" : "outlined"}
                onClick={() => changePage(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outlined"
              disabled={nextGroupPage > totalPages}
              onClick={() => changePage(nextGroupPage)}
            >
              다음
            </Button>
          </Stack>
        )}
      </Box>

      <Fab
        color="primary"
        sx={{ position: "fixed", bottom: 32, right: 32 }}
        onClick={() => navigate("/posts/create")}
      >
        <Add />
      </Fab>
    </Box>
  );
}
