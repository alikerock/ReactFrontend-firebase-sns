import { useState } from "react";
import { Box, Card, CardContent, Typography, Button, Divider, Stack } from "@mui/material";
import { Google, GitHub } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import FormField from "../components/FormField";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "", confirm: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 5,
      }}
    >
      <Card sx={{ width: 400, boxShadow: "0px 1px 1.5px rgba(0,0,0,0.12)", borderRadius: 2 }}>
        <CardContent sx={{ p: 4 }}>
          <Stack alignItems="center" spacing={1} sx={{ mb: 3 }}>
            <Typography variant="h5" fontWeight={700} color="primary.main" fontSize={28}>
              DevLog
            </Typography>
            <Typography variant="body2" color="text.secondary">
              교육 개발자 계정을 생성하세요
            </Typography>
          </Stack>

          <Stack spacing={1.5} sx={{ mb: 2 }}>
            <FormField
              label="사용자 이름 *"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="dev_learner"
              autoComplete="username"
            />
            <FormField
              label="이메일 *"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="learner@devlog.com"
              autoComplete="email"
            />
            <FormField
              label="비밀번호 *"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              autoComplete="new-password"
            />
            <FormField
              label="비밀번호 확인 *"
              name="confirm"
              type="password"
              value={form.confirm}
              onChange={handleChange}
              placeholder="••••••••"
              autoComplete="new-password"
            />
          </Stack>

          <Button variant="contained" fullWidth sx={{ height: 40, mb: 2 }} onClick={handleSignup}>
            회원가입
          </Button>

          <Divider sx={{ mb: 2 }}>
            <Typography variant="caption" color="text.disabled">
              또는
            </Typography>
          </Divider>

          <Stack spacing={1.25} sx={{ mb: 2 }}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<Google />}
              sx={{
                height: 38,
                color: "text.primary",
                borderColor: "#e0e0e0",
                "&:hover": { borderColor: "#bdbdbd" },
              }}
            >
              Google로 가입
            </Button>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<GitHub />}
              sx={{
                height: 38,
                color: "text.primary",
                borderColor: "#e0e0e0",
                "&:hover": { borderColor: "#bdbdbd" },
              }}
            >
              GitHub로 가입
            </Button>
          </Stack>

          <Box sx={{ textAlign: "center", pt: 1 }}>
            <Typography
              variant="body2"
              color="primary.main"
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              이미 계정이 있으신가요? 로그인
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
