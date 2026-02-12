import { Box, Typography } from '@mui/material';

export default function HistoryPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Approval History</Typography>
      <Box sx={{ mt: 2, p: 2, bgcolor: '#fff', borderRadius: 2, boxShadow: 1 }}>
        <Typography>History table placeholder</Typography>
      </Box>
    </Box>
  );
}
