import { Box, Typography, Stack, Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { myPosts } from '../data/mockData';

export default function MyPosts() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flex: 1 }}>
      <Box sx={{ flex: 1, maxWidth: 680, p: 3 }}>
        <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>내 게시글</Typography>
        {myPosts.length === 0 ? (
          <Typography color="text.secondary">작성한 게시글이 없습니다.</Typography>
        ) : (
          <Stack spacing={3}>
            {myPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </Stack>
        )}
      </Box>
      <Fab
        color="primary"
        sx={{ position: 'fixed', bottom: 32, right: 32 }}
        onClick={() => navigate('/posts/create')}
      >
        <Add />
      </Fab>
    </Box>
  );
}
