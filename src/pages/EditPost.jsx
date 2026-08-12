import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
} from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import { posts } from '../data/mockData';

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));
  const [form, setForm] = useState({ title: post?.title || '', content: post?.fullContent || '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <Box sx={{ display: 'flex', flex: 1 }}>
      <Box sx={{ flex: 1, maxWidth: 680, p: 3 }}>
        <Typography variant="h6" fontWeight={700} sx={{ mb: 2.5 }}>게시글 수정</Typography>

        <Card sx={{ boxShadow: '0px 1px 1px rgba(0,0,0,0.05)' }}>
          <CardContent sx={{ p: 3 }}>
            <Stack spacing={2.5}>
              <Stack spacing={0.75}>
                <Typography variant="body2" fontWeight={500} color="text.secondary">제목</Typography>
                <TextField name="title" value={form.title} onChange={handleChange} fullWidth size="small" />
              </Stack>

              <Stack spacing={0.75}>
                <Typography variant="body2" fontWeight={500} color="text.secondary">내용</Typography>
                <TextField name="content" value={form.content} onChange={handleChange} multiline rows={8} fullWidth />
              </Stack>

              {/* Current image */}
              <Stack spacing={0.75}>
                <Typography variant="body2" fontWeight={500} color="text.secondary">현재 대표 이미지</Typography>
                <Box
                  sx={{
                    bgcolor: '#e0e0e0',
                    height: 140,
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: 1,
                  }}
                >
                  <Typography variant="body2" color="text.secondary">[ mui_grid_guide_thumbnail.png ]</Typography>
                  <Button size="small" sx={{ color: '#d32f2f', border: '1px solid #d32f2f', bgcolor: '#e0e0e0', px: 1, py: 0.5, fontSize: 12 }}>
                    삭제
                  </Button>
                </Box>
              </Stack>

              {/* New upload */}
              <Stack spacing={0.75}>
                <Typography variant="body2" fontWeight={500} color="text.secondary">새 이미지 업로드</Typography>
                <Box
                  sx={{
                    bgcolor: '#f5f5f5',
                    border: '1px dashed #e0e0e0',
                    borderRadius: 1,
                    height: 120,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    cursor: 'pointer',
                  }}
                >
                  <CloudUpload sx={{ color: 'primary.main', fontSize: 32 }} />
                  <Typography variant="body2" fontWeight={500} color="text.secondary">클릭하여 이미지 업로드</Typography>
                </Box>
              </Stack>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 1.5 }}>
                <Button sx={{ color: '#666' }} onClick={() => navigate(-1)}>취소</Button>
                <Button variant="contained" sx={{ px: 2.5, py: 1.25 }} onClick={handleSubmit}>수정</Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
