import { useState } from "react";
import { Box, Card, CardContent, Typography, Button, Divider, Stack } from "@mui/material";
import { Google, GitHub } from "@mui/icons-material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import FormField from "../components/FormField";
import { auth } from "../../firebase";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirm: "",
};

const firebaseErrorMessage = code => {
  switch (code) {
    case "auth/email-already-in-use":
      return "이미 사용 중인 이메일입니다.";
    case "auth/invalid-email":
      return "올바른 이메일 형식이 아닙니다.";
    case "auth/weak-password":
      return "비밀번호는 6자 이상이어야 합니다.";
    case "auth/network-request-failed":
      return "네트워크 연결을 확인한 후 다시 시도해주세요.";
    default:
      return "회원가입 처리 중 오류가 발생했습니다. 다시 시도해주세요.";
  }
};

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }

    if (submitError) {
      setSubmitError("");
    }
  };

  const validateForm = () => {
    const nextErrors = {};
    const username = form.username.trim();
    const email = form.email.trim();
    const password = form.password;
    const confirm = form.confirm;

    if (!username) {
      nextErrors.username = "사용자 이름을 입력해주세요.";
    }

    if (!email) {
      nextErrors.email = "이메일을 입력해주세요.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "올바른 이메일 형식을 입력해주세요.";
    }

    if (!password) {
      nextErrors.password = "비밀번호를 입력해주세요.";
    } else if (password.length < 6) {
      nextErrors.password = "비밀번호는 6자 이상이어야 합니다.";
    }

    if (!confirm) {
      nextErrors.confirm = "비밀번호 확인을 입력해주세요.";
    } else if (password !== confirm) {
      nextErrors.confirm = "비밀번호가 일치하지 않습니다.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSignup = async () => {
    if (!validateForm() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      await createUserWithEmailAndPassword(auth, form.email.trim(), form.password);
      navigate("/login");
    } catch (error) {
      setSubmitError(firebaseErrorMessage(error.code));
    } finally {
      setIsSubmitting(false);
    }
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
              error={Boolean(errors.username)}
              helperText={errors.username || " "}
            />
            <FormField
              label="이메일 *"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="learner@devlog.com"
              autoComplete="email"
              error={Boolean(errors.email)}
              helperText={errors.email || " "}
            />
            <FormField
              label="비밀번호 *"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              autoComplete="new-password"
              error={Boolean(errors.password)}
              helperText={errors.password || " "}
            />
            <FormField
              label="비밀번호 확인 *"
              name="confirm"
              type="password"
              value={form.confirm}
              onChange={handleChange}
              placeholder="••••••••"
              autoComplete="new-password"
              error={Boolean(errors.confirm)}
              helperText={errors.confirm || " "}
            />
          </Stack>

          {submitError && (
            <Typography variant="body2" color="error" sx={{ mb: 1.5, textAlign: "center" }}>
              {submitError}
            </Typography>
          )}

          <Button
            variant="contained"
            fullWidth
            sx={{ height: 40, mb: 2 }}
            onClick={handleSignup}
            disabled={isSubmitting}
          >
            {isSubmitting ? "처리 중..." : "회원가입"}
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
