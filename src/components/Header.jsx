import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Avatar,
  Box,
  useMediaQuery,
} from "@mui/material";
import { Terminal, Search, NotificationsNone, Menu as MenuIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Header({ onMenuClick }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const isMobile = useMediaQuery(theme => theme.breakpoints.down("md"));
  const { user, loading } = useAuth();

  const initials = user?.email ? user.email.charAt(0).toUpperCase() : "U";

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
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="게시글, 주제, 작성자 검색..."
            sx={{ color: "rgba(255,255,255,0.85)", fontSize: 14, flex: 1 }}
            inputProps={{ "aria-label": "검색" }}
          />
        </Box>

        {/* Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton color="inherit" size="small">
            <NotificationsNone />
          </IconButton>
          <Avatar
            sx={{
              width: 36,
              height: 36,
              bgcolor: "#e0e0e0",
              color: "#666",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
            }}
            onClick={() => navigate("/profile")}
          >
            {loading ? "?" : initials}
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
