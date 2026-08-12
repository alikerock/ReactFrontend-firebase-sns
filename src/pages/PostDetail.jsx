import { useState } from 'react';
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
} from '@mui/material';
import { Favorite, FavoriteBorder, ChatBubbleOutlineRounded, Share } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import { posts, currentUser } from '../data/mockData';

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(post?.comments || []);

  if (!post) {
    navigate('/404');
    return null;
  }

  const handleComment = () => {
    if (!comment.trim()) return;
    setComments([...comments, { id: Date.now(), author: currentUser.name, initials: currentUser.initials, content: comment }]);
    setComment('');
  };

  return (
    <Box sx={{ display: 'flex', flex: 1 }}>
      <Box sx={{ flex: 1, maxWidth: 680, p: 3 }}>
        <Card sx={{ boxShadow: '0px 1px 1px rgba(0,0,0,0.05)' }}>
          <CardContent sx={{ p: 3 }}>
            {/* Author row */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
              <Avatar sx={{ width: 40, height: 40, bgcolor: 'primary.main', fontWeight: 700 }}>
                {post.author.initials}
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1" fontWeight={700}>{post.author.name}</Typography>
                <Typography variant="caption" color="text.disabled">{post.createdAt} · {post.readTime}</Typography>
              </Box>
              <IconButton size="small">
                <Share sx={{ fontSize: 18, color: '#666' }} />
              </IconButton>
            </Box>

            {/* Title */}
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>{post.title}</Typography>

            {/* Image */}
            <Box sx={{ bgcolor: '#e0e0e0', height: 300, borderRadius: 1, mb: 2.5 }} />

            {/* Body */}
            <Stack spacing={2} sx={{ mb: 2.5 }}>
              {post.fullContent.split('\n\n').map((para, i) => (
                <Typography key={i} variant="body1" color="text.primary" lineHeight={1.6}>
                  {para}
                </Typography>
              ))}
            </Stack>

            {/* Stats */}
            <Box sx={{ display: 'flex', gap: 2.5, mb: 2.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, cursor: 'pointer' }} onClick={() => setLiked(!liked)}>
                {liked ? <Favorite sx={{ fontSize: 18, color: 'primary.main' }} /> : <FavoriteBorder sx={{ fontSize: 18, color: '#666' }} />}
                <Typography variant="body2" color={liked ? 'primary.main' : 'text.primary'}>
                  좋아요 {post.likes + (liked ? 1 : 0)}개
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                <ChatBubbleOutlineRounded sx={{ fontSize: 18, color: '#666' }} />
                <Typography variant="body2">댓글 {comments.length}개</Typography>
              </Box>
            </Box>

            <Divider sx={{ mb: 2.5 }} />

            {/* Comments */}
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2 }}>댓글</Typography>
            <Stack spacing={2} sx={{ mb: 2.5 }}>
              {comments.map((c) => (
                <Box key={c.id} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <Avatar sx={{ width: 32, height: 32, bgcolor: '#e0e0e0', color: '#666', fontSize: 11, fontWeight: 700 }}>
                    {c.initials}
                  </Avatar>
                  <Box sx={{ flex: 1, bgcolor: '#f5f5f5', borderRadius: 1, p: 1.5 }}>
                    <Typography variant="body2" fontWeight={700} sx={{ mb: 0.5 }}>{c.author}</Typography>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.4}>{c.content}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>

            {/* Comment input */}
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
              <TextField
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="댓글을 입력하세요..."
                fullWidth
                size="small"
                onKeyDown={(e) => e.key === 'Enter' && handleComment()}
              />
              <Button variant="contained" sx={{ height: 40, flexShrink: 0 }} onClick={handleComment}>
                등록
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
