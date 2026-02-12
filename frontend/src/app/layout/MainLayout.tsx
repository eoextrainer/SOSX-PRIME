import { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Box, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton } from '@mui/material';
import { Inbox, CheckCircle, History, AssignmentInd, AdminPanelSettings } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 220;

const navItems = [
  { label: 'Approvals', icon: <Inbox />, path: '/approvals' },
  { label: 'My Requests', icon: <AssignmentInd />, path: '/approvals/my-requests' },
  { label: 'History', icon: <History />, path: '/approvals/history' },
  { label: 'Admin', icon: <AdminPanelSettings />, path: '/admin' },
];

export default function MainLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: '#D1B3C4' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Approvals Dashboard
          </Typography>
          {/* User menu, notifications, etc. */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', background: '#fff6fa' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.label} component={Link} to={item.path} selected={location.pathname === item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#F8E1E7', p: 3, minHeight: '100vh' }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
