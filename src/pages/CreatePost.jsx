import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  Stack,
} from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { topics } from '../data/mockData';

export default function CreatePost() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', topic: '', content: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', flex: 1 }}>
      <Box sx={{ flex: 1, maxWidth: 680, p: 3 }}>
        <Typography variant="h6" fontWeight={700} sx={{ mb: 2.5 }}>새 게시글 작성</Typography>

        <Card sx={{ boxShadow: '0px 1px 1px rgba(0,0,0,0.05)' }}>
          <CardContent sx={{ p: 3 }}>
            <Stack spacing={2.5}>
              {/* Title */}
              <Stack spacing={0.75}>
                <Typography variant="caption" fontWeight={500} color="text.secondary">제목</Typography>
                <TextField
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Getting Started with MUI Components"
                  fullWidth
                  size="small"
                />
              </Stack>

              {/* Topic */}
              <Stack spacing={0.75}>
                <Typography variant="caption" fontWeight={500} color="text.secondary">주제 선택</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    displayEmpty
                    renderValue={(v) => v || <span style={{ color: '#666' }}>주제를 선택하세요</span>}
                  >
                    {topics.filter((t) => t !== '전체').map((t) => (
                      <MenuItem key={t} value={t}>{t}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>

              {/* Content */}
              <Stack spacing={0.75}>
                <Typography variant="caption" fontWeight={500} color="text.secondary">내용</Typography>
                <TextField
                  name="content"
                  value={form.content}
                  onChange={handleChange}
                  multiline
                  rows={8}
                  fullWidth
                  placeholder="내용을 입력하세요..."
                />
              </Stack>

              {/* Image upload */}
              <Stack spacing={0.75}>
                <Typography variant="caption" fontWeight={500} color="text.secondary">대표 이미지</Typography>
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
                    '&:hover': { bgcolor: '#eeeeee' },
                  }}
                >
                  <CloudUpload sx={{ color: 'primary.main', fontSize: 32 }} />
                  <Typography variant="body2" fontWeight={500} color="text.secondary">클릭하여 이미지 업로드</Typography>
                </Box>
              </Stack>

              {/* Buttons */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 1.5 }}>
                <Button sx={{ color: '#666' }} onClick={() => navigate(-1)}>취소</Button>
                <Button variant="contained" sx={{ px: 2.5, py: 1.25 }} onClick={handleSubmit}>등록</Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
