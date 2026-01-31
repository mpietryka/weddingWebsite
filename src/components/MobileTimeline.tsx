import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Typography } from '@mui/material';
import { timelineCard } from './styles';
import scheduleData from '../data/schedule.json';

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
          {scheduleData.title1}
        </Typography>
        <Typography variant="body1">
          {scheduleData.text1}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', my: 1 }}>
        <TimelineDot />
      </Box>

      <Box sx={{ ...timelineCard, mx: 3, my: 1.5 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {scheduleData.title2}
        </Typography>
        <Typography variant="body1">
          {scheduleData.text2}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', my: 1 }}>
        <TimelineDot />
      </Box>

      <Box sx={{ ...timelineCard, mx: 3, my: 1.5 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {scheduleData.title3}
        </Typography>
        <Typography variant="body1">
          {scheduleData.text3}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', my: 1 }}>
        <TimelineDot />
      </Box>

      <Box sx={{ ...timelineCard, mx: 3, my: 1.5 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {scheduleData.title4}
        </Typography>
        <Typography variant="body1">
          {scheduleData.text4}
        </Typography>
      </Box>
    </Box>
  );
}
