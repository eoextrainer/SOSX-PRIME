import { Box, Typography } from '@mui/material';

export default function ApprovalsListPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Pending Approvals</Typography>
      {/* ApprovalFilters, ApprovalsTable, ApprovalActionsBar will go here */}
      <Box sx={{ mt: 2, p: 2, bgcolor: '#fff', borderRadius: 2, boxShadow: 1 }}>
        <Typography>Approvals table placeholder</Typography>
      </Box>
    </Box>
  );
}
