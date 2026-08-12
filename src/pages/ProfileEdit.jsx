import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  TextField,
  Divider,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { currentUser } from '../data/mockData';

export default function ProfileEdit() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: currentUser.name,
    email: currentUser.email,
    bio: currentUser.bio,
    github: currentUser.github,
    website: currentUser.website,
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = () => {
    navigate('/profile');
  };

  return (
    <Box sx={{ display: 'flex', flex: 1 }}>
      {/* Center */}
      <Box sx={{ flex: 1, maxWidth: 680, p: 3 }}>
        <Card sx={{ boxShadow: '0px 1px 1px rgba(0,0,0,0.05)' }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 3.5 }}>프로필 정보 수정</Typography>

            {/* Photo section */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3.5 }}>
              <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', fontSize: 24, fontWeight: 700 }}>
                {currentUser.initials}
              </Avatar>
              <Box>
                <Button variant="outlined" size="small" sx={{ mb: 0.75 }}>이미지 변경</Button>
                <Typography variant="caption" color="text.disabled" display="block">최대 2MB의 JPG, PNG 이미지를 지원합니다.</Typography>
              </Box>
            </Box>

            <Divider sx={{ mb: 3.5 }} />

            {/* Profile fields */}
            <Stack spacing={2.5} sx={{ mb: 3.5 }}>
              <Stack spacing={0.75}>
                <Typography variant="body2" fontWeight={700}>이름</Typography>
                <TextField name="name" value={form.name} onChange={handleChange} fullWidth size="small" sx={{ '& .MuiInputBase-root': { bgcolor: '#fafafa' } }} />
              </Stack>
              <Stack spacing={0.75}>
                <Typography variant="body2" fontWeight={700}>이메일 주소</Typography>
                <TextField name="email" value={form.email} onChange={handleChange} fullWidth size="small" sx={{ '& .MuiInputBase-root': { bgcolor: '#fafafa' } }} />
              </Stack>
              <Stack spacing={0.75}>
                <Typography variant="body2" fontWeight={700}>자기소개</Typography>
                <TextField name="bio" value={form.bio} onChange={handleChange} multiline rows={3} fullWidth sx={{ '& .MuiInputBase-root': { bgcolor: '#fafafa' } }} />
              </Stack>
            </Stack>

            <Divider sx={{ mb: 3.5 }} />

            {/* Social fields */}
            <Stack spacing={2} sx={{ mb: 3.5 }}>
              <Typography variant="subtitle1" fontWeight={700}>소셜 및 웹사이트 링크</Typography>
              <Stack spacing={0.75}>
                <Typography variant="body2" fontWeight={700}>GitHub 주소</Typography>
                <TextField name="github" value={form.github} onChange={handleChange} fullWidth size="small" sx={{ '& .MuiInputBase-root': { bgcolor: '#fafafa' } }} />
              </Stack>
              <Stack spacing={0.75}>
                <Typography variant="body2" fontWeight={700}>개인 웹사이트 / 블로그</Typography>
                <TextField name="website" value={form.website} onChange={handleChange} placeholder="https://example.com" fullWidth size="small" sx={{ '& .MuiInputBase-root': { bgcolor: '#fafafa' } }} />
              </Stack>
            </Stack>

            <Divider sx={{ mb: 3.5 }} />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1.5 }}>
              <Button variant="outlined" sx={{ borderColor: '#e0e0e0', color: '#666', px: 2.5, py: 1.25 }} onClick={() => navigate('/profile')}>취소</Button>
              <Button variant="contained" sx={{ px: 3, py: 1.25 }} onClick={handleSave}>저장</Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Right rail - Stats */}
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
