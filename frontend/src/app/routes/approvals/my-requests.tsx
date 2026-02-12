import { Box, Typography } from '@mui/material';

export default function MyRequestsPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>My Requests</Typography>
      <Box sx={{ mt: 2, p: 2, bgcolor: '#fff', borderRadius: 2, boxShadow: 1 }}>
        <Typography>My requests table placeholder</Typography>
      </Box>
    </Box>
  );
}
