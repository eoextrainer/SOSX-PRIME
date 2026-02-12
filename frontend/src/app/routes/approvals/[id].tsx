import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function ApprovalDetailPage() {
  const { id } = useParams();
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Approval Detail</Typography>
      <Typography>ID: {id}</Typography>
      <Box sx={{ mt: 2, p: 2, bgcolor: '#fff', borderRadius: 2, boxShadow: 1 }}>
        <Typography>Detail view placeholder</Typography>
      </Box>
    </Box>
  );
}
