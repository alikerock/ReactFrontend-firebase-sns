import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Avatar,
  Box,
  Button,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import {
  Terminal,
  Search,
  NotificationsNone,
  Menu as MenuIcon,
  LightMode,
  DarkMode,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useThemeMode } from "../contexts/ThemeContext";

export default function Header({ onMenuClick, searchTerm, onSearchChange }) {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down("md"));
  const { user, loading } = useAuth();
  const { mode, toggleTheme } = useThemeMode();

  const initials = (user?.displayName || user?.email || "U").charAt(0).toUpperCase();

  return (
    <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 2, md: 3 },
          height: 64,
          minHeight: "64px !important",
        }}
      >
        {/* Logo */}
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={e => {
                e.stopPropagation();
                onMenuClick?.();
              }}
              sx={{ mr: 0.5 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Terminal sx={{ fontSize: 24 }} />
          <Typography variant="h6" fontWeight={700} sx={{ letterSpacing: 0 }}>
            DevLog
          </Typography>
        </Box>

        {/* Search bar */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: 1,
            bgcolor: "rgba(255,255,255,0.15)",
            borderRadius: 1,
            px: 1.5,
            height: 36,
            width: { sm: 280, md: 400 },
          }}
        >
          <Search sx={{ fontSize: 18, opacity: 0.7 }} />
          <InputBase
            value={searchTerm}
            onChange={e => onSearchChange(e.target.value)}
            placeholder="게시글, 주제, 작성자 검색..."
            sx={{ color: "rgba(255,255,255,0.85)", fontSize: 14, flex: 1 }}
            inputProps={{ "aria-label": "검색" }}
          />
        </Box>

        {/* Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Tooltip title={mode === "light" ? "다크 모드" : "라이트 모드"}>
            <IconButton color="inherit" size="small" onClick={toggleTheme} aria-label="테마 전환">
              {mode === "light" ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Tooltip>
          <IconButton color="inherit" size="small">
            <NotificationsNone />
          </IconButton>
          {!loading && user ? (
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: theme => (theme.palette.mode === "dark" ? "#90caf9" : "#e0e0e0"),
                color: theme => (theme.palette.mode === "dark" ? "#0d47a1" : "#424242"),
                border: "2px solid rgba(255,255,255,0.7)",
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
              }}
              onClick={() => navigate("/profile")}
            >
              {initials}
            </Avatar>
          ) : !loading ? (
            <>
              <Button color="inherit" onClick={() => navigate("/login")}>
                로그인
              </Button>
              <Button color="inherit" onClick={() => navigate("/signup")}>
                회원가입
              </Button>
            </>
          ) : null}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
