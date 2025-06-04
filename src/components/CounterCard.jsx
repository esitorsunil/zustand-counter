import { useState } from 'react';
import { Box, Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline, RestartAlt } from '@mui/icons-material';
import useCounterStore from '../store/counterStore';

const CounterCard = () => {
  const { count, increment, decrement, reset } = useCounterStore();
  const [active, setActive] = useState(null);

  const btn = { variant: 'outlined', sx: { textTransform: 'none', fontWeight: 500 } };

 const handle = (actionType, callback) => {
  setActive(actionType);
  callback();
  setTimeout(() => setActive(null), 300);
};

const colors = { increment: 'primary', decrement: 'error', reset: 'success' };
const getColor = (actionType) => (active === actionType ? colors[actionType] : 'inherit');

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <Card
        elevation={6}
        sx={{ p: 4, borderRadius: 5, minWidth: 400, textAlign: 'center', background: 'linear-gradient(135deg,#fafafa,#fff)', '&:hover': { boxShadow: 12 } }}
      >
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Zustand Counter
          </Typography>
          <Typography variant="h2" sx={{ my: 3, fontWeight: 'bold', color: '#333' }}>
            {count}
          </Typography>
          <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap" sx={{ mt: 2 }}>
            <Button {...btn} color={getColor('decrement')} startIcon={<RemoveCircleOutline />} onClick={() => handle('decrement', decrement)}>
              Decrement
            </Button>
            <Button {...btn} color={getColor('increment')} startIcon={<AddCircleOutline />} onClick={() => handle('increment', increment)}>
              Increment
            </Button>
            <Button {...btn} color={getColor('reset')} startIcon={<RestartAlt />} onClick={() => handle('reset', reset)}>
              Reset
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};


export default CounterCard;
