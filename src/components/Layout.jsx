import { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const DRAWER_WIDTH = 240;

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header onMenuClick={() => setMobileOpen(true)} />
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { md: `${DRAWER_WIDTH}px` },
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
