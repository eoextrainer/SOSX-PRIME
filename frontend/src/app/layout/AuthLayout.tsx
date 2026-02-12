import { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: '#F8E1E7' }}>
      <Typography variant="h3" sx={{ mb: 4, color: '#D1B3C4' }}>Approvals App</Typography>
      <Box sx={{ bgcolor: '#fff', p: 4, borderRadius: 2, boxShadow: 2, minWidth: 320 }}>
        {children}
      </Box>
    </Box>
  );
}
