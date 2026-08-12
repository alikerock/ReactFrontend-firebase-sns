import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
} from '@mui/material';
import { Home, MenuBook, Person, Logout } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const DRAWER_WIDTH = 240;

const navItems = [
  { label: '홈', icon: <Home />, path: '/' },
  { label: '내 게시글', icon: <MenuBook />, path: '/my-posts' },
  { label: '프로필', icon: <Person />, path: '/profile' },
  { label: '로그아웃', icon: <Logout />, path: '/login' },
];

function SidebarContent({ onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (path) => {
    navigate(path);
    onClose?.();
  };

  return (
    <Box sx={{ width: DRAWER_WIDTH, pt: 1, pb: 2, px: 1 }}>
      {navItems.map(({ label, icon, path }) => {
        const active = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
        return (
          <ListItemButton
            key={label}
            onClick={() => handleNav(path)}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              height: 48,
              bgcolor: active ? 'rgba(25,118,210,0.08)' : 'transparent',
              '&:hover': { bgcolor: active ? 'rgba(25,118,210,0.12)' : 'rgba(0,0,0,0.04)' },
            }}
          >
            <ListItemIcon sx={{ minWidth: 38, color: active ? 'primary.main' : '#666' }}>
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={label}
              slotProps={{
                primary: {
                  fontSize: 14,
                  fontWeight: active ? 700 : 500,
                  color: active ? 'primary.main' : 'text.primary',
                },
              }}
            />
          </ListItemButton>
        );
      })}
    </Box>
  );
}

export default function Sidebar({ mobileOpen, onClose }) {
  return (
    <>
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { width: DRAWER_WIDTH, boxSizing: 'border-box' } }}
      >
        <Toolbar />
        <List disablePadding>
          <SidebarContent onClose={onClose} />
        </List>
      </Drawer>

      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: DRAWER_WIDTH, boxSizing: 'border-box', borderRight: '1px solid #e0e0e0' },
        }}
      >
        <Toolbar />
        <List disablePadding>
          <SidebarContent />
        </List>
      </Drawer>
    </>
  );
}
