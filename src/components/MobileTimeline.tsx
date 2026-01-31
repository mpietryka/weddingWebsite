import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Typography } from '@mui/material';
import { timelineCard } from './styles';

export default function MobileTimeline() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Box sx={{ ...timelineCard, mx: 3, my: 1.5 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Hackney Town Hall - 10:00
        </Typography>
        <Typography variant="body1">
          Please arrive by 9:45, for a 10 start. Any latecomers will have to wait outside until the ceremony is over. We don't want to you to miss it!
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', my: 1 }}>
        <TimelineDot />
      </Box>

      <Box sx={{ ...timelineCard, mx: 3, my: 1.5 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Overground - 11:00
        </Typography>
        <Typography variant="body1">
          After the ceremony, we'll head to the Overground station to catch the quick train to our final destination.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', my: 1 }}>
        <TimelineDot />
      </Box>

      <Box sx={{ ...timelineCard, mx: 3, my: 1.5 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          The Spread Eagle - 11:30
        </Typography>
        <Typography variant="body1">
          We arrive at our lovely venue for lunch, cake, drinks and some light hearted fun.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', my: 1 }}>
        <TimelineDot />
      </Box>

      <Box sx={{ ...timelineCard, mx: 3, my: 1.5 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Thanks for coming!
        </Typography>
        <Typography variant="body1">
          We hope you have a wonderful time and enjoyed our little celebration!
        </Typography>
      </Box>
    </Box>
  );
}
