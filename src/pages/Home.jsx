import { useState } from 'react';
import {
  Box,
  Typography,
  Chip,
  Stack,
  Card,
  CardContent,
  Fab,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { posts, topics, popularTopics } from '../data/mockData';

export default function Home() {
  const navigate = useNavigate();
  const [activeTopic, setActiveTopic] = useState('전체');

  const filtered = activeTopic === '전체' ? posts : posts.filter((p) => p.topic === activeTopic);

  return (
    <Box sx={{ display: 'flex', flex: 1 }}>
      {/* Center feed */}
      <Box sx={{ flex: 1, maxWidth: 680, p: 3, minWidth: 0 }}>
        <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>최근 게시글</Typography>

        {/* Topic filters */}
        <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
          {topics.map((t) => (
            <Chip
              key={t}
              label={t}
              onClick={() => setActiveTopic(t)}
              sx={{
                height: 32,
                bgcolor: activeTopic === t ? 'primary.main' : 'white',
                color: activeTopic === t ? 'white' : 'text.primary',
                fontWeight: activeTopic === t ? 700 : 500,
                border: '1px solid',
                borderColor: activeTopic === t ? 'primary.main' : '#e0e0e0',
                '&:hover': { bgcolor: activeTopic === t ? 'primary.dark' : '#f5f5f5' },
              }}
            />
          ))}
        </Stack>

        {/* Posts */}
        <Stack spacing={3}>
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Stack>
      </Box>

      {/* Right rail */}
      <Box sx={{ width: 280, flexShrink: 0, p: 3, display: { xs: 'none', lg: 'block' } }}>
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
          <CardContent sx={{ p: 2 }}>
            <Typography variant="body2" fontWeight={700} sx={{ mb: 1.5 }}>인기 주제</Typography>
            <Stack spacing={0.5}>
              {popularTopics.map(({ tag, count }) => (
                <Typography key={tag} variant="caption" color="text.secondary" lineHeight={1.4}>
                  #{tag} — {count}개 게시글
                </Typography>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Box>

      {/* FAB */}
      <Fab
        color="primary"
        sx={{ position: 'fixed', bottom: 32, right: 32, boxShadow: '0px 3px 2.5px rgba(0,0,0,0.2)' }}
        onClick={() => navigate('/posts/create')}
      >
        <Add />
      </Fab>
    </Box>
  );
}
