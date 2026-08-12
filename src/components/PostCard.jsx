import {
  Card,
  CardContent,
  Box,
  Avatar,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import { FavoriteBorder, ChatBubbleOutlineRounded, MoreVert } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function PostCard({ post }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ cursor: 'pointer', '&:hover': { boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }, transition: 'box-shadow 0.2s' }}
      onClick={() => navigate(`/posts/${post.id}`)}
    >
      <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
        {/* Author row */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <Avatar sx={{ width: 36, height: 36, bgcolor: 'primary.main', fontSize: 12, fontWeight: 700 }}>
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
          <IconButton size="small" onClick={(e) => e.stopPropagation()}>
            <MoreVert sx={{ fontSize: 18, color: '#666' }} />
          </IconButton>
        </Box>

        {/* Content */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" fontWeight={700} color="text.primary" sx={{ mb: 1, lineHeight: 1.4 }}>
            {post.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
          >
            {post.content}
          </Typography>
        </Box>

        {/* Image placeholder */}
        <Box sx={{ bgcolor: '#e0e0e0', height: 180, borderRadius: 1, mb: 2 }} />

        {/* Footer */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }} onClick={(e) => e.stopPropagation()}>
            <FavoriteBorder sx={{ fontSize: 18, color: '#666' }} />
            <Typography variant="body2" color="text.secondary">{post.likes}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <ChatBubbleOutlineRounded sx={{ fontSize: 18, color: '#666' }} />
            <Typography variant="body2" color="text.secondary">댓글 {post.comments.length}개</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
