import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 10 }}>
      <Card sx={{ width: 480, boxShadow: '0px 1px 1px rgba(0,0,0,0.05)' }}>
        <CardContent sx={{ p: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h1"
              fontWeight={900}
              color="#9e9e9e"
              sx={{ fontSize: 72, lineHeight: 1.1, mb: 1.5 }}
            >
              404
            </Typography>
            <Typography variant="h6" fontWeight={700} color="text.primary">
              페이지를 찾을 수 없습니다
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" textAlign="center" lineHeight={1.6}>
            요청하신 페이지가 존재하지 않습니다.
          </Typography>
          <Button variant="contained" sx={{ px: 3, py: 1.5 }} onClick={() => navigate('/')}>
            홈으로 돌아가기
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
