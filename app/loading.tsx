import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Loading = () => {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        You are offline
      </Typography>
    </Paper>
  );
};

export default Loading;
