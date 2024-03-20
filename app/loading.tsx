import { CircularProgress } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Loading = () => {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        <div>Loading...</div>
        <CircularProgress />
      </Typography>
    </Paper>
  );
};

export default Loading;
