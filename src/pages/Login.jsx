import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Divider,
  Stack,
} from '@mui/material';
import { Google, GitHub } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 5 }}>
      <Card sx={{ width: 400, boxShadow: '0px 1px 1.5px rgba(0,0,0,0.12)', borderRadius: 2 }}>
        <CardContent sx={{ p: 4 }}>
          {/* Header */}
          <Stack alignItems="center" spacing={1} sx={{ mb: 3 }}>
            <Typography variant="h5" fontWeight={700} color="primary.main" fontSize={28}>
              DevLog
            </Typography>
            <Typography variant="body2" color="text.secondary">
              교육 기술 블로그 &amp; SNS
            </Typography>
          </Stack>

          {/* Form */}
          <Stack spacing={2} sx={{ mb: 2 }}>
            <Stack spacing={0.75}>
              <Typography variant="caption" fontWeight={500} color="text.secondary">이메일 *</Typography>
              <TextField
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="developer@devlog.com"
                fullWidth
                size="small"
              />
            </Stack>
            <Stack spacing={0.75}>
              <Typography variant="caption" fontWeight={500} color="text.secondary">비밀번호 *</Typography>
              <TextField
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                fullWidth
                size="small"
              />
            </Stack>
          </Stack>

          <Button variant="contained" fullWidth sx={{ height: 40, mb: 2 }} onClick={handleLogin}>
            로그인
          </Button>

          <Divider sx={{ mb: 2 }}>
            <Typography variant="caption" color="text.disabled">또는</Typography>
          </Divider>

          <Stack spacing={1.5} sx={{ mb: 2 }}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<Google />}
              sx={{ height: 40, color: 'text.primary', borderColor: '#e0e0e0', '&:hover': { borderColor: '#bdbdbd' } }}
            >
              Google로 로그인
            </Button>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<GitHub />}
              sx={{ height: 40, color: 'text.primary', borderColor: '#e0e0e0', '&:hover': { borderColor: '#bdbdbd' } }}
            >
              GitHub로 로그인
            </Button>
          </Stack>

          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="body2"
              color="primary.main"
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate('/signup')}
            >
              계정이 없으신가요? 회원가입
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
