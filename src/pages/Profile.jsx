import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Divider,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { currentUser, myPosts } from '../data/mockData';

export default function Profile() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flex: 1 }}>
      {/* Center */}
      <Box sx={{ flex: 1, maxWidth: 680, p: 3 }}>
        {/* Profile header card */}
        <Card sx={{ mb: 3, boxShadow: '0px 1px 1px rgba(0,0,0,0.05)' }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 2.5 }}>
              <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', fontSize: 24, fontWeight: 700 }}>
                {currentUser.initials}
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight={700}>{currentUser.name}</Typography>
                <Typography variant="body2" color="text.secondary">{currentUser.email}</Typography>
                <Typography variant="caption" color="text.disabled">{currentUser.joinDate} 가입</Typography>
              </Box>
              <Button
                variant="outlined"
                size="small"
                sx={{ borderColor: 'primary.main', color: 'primary.main', fontWeight: 700, fontSize: 13, px: 2 }}
                onClick={() => navigate('/profile/edit')}
              >
                프로필 수정
              </Button>
            </Box>

            <Divider sx={{ mb: 2.5 }} />

            <Box>
              <Typography variant="body2" fontWeight={700} sx={{ mb: 0.75 }}>About Me</Typography>
              <Typography variant="body2" color="text.secondary" lineHeight={1.6}>{currentUser.bio}</Typography>
            </Box>
          </CardContent>
        </Card>

        <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>{currentUser.name}님의 게시글</Typography>
        <Stack spacing={3}>
          {myPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Stack>
      </Box>

      {/* Right rail */}
      <Box sx={{ width: 280, flexShrink: 0, p: 3, display: { xs: 'none', lg: 'block' } }}>
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
          <CardContent sx={{ p: 2 }}>
            <Typography variant="body2" fontWeight={700} sx={{ mb: 1.5 }}>Personal Stats</Typography>
            <Stack direction="row" spacing={2}>
              {[
                { value: currentUser.stats.posts, label: 'POSTS' },
                { value: currentUser.stats.likes, label: 'LIKES' },
                { value: currentUser.stats.comments, label: 'COMMENTS' },
              ].map(({ value, label }) => (
                <Box key={label}>
                  <Typography variant="h6" color="primary.main" fontWeight={700} lineHeight={1.2}>{value}</Typography>
                  <Typography variant="caption" color="text.secondary" fontSize={11}>{label}</Typography>
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
