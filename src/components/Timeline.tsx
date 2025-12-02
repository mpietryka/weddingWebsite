import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Typography } from '@mui/material';
import { timelineCard } from './styles';

export default function AlternateReverseTimeline() {
  return (
    <Timeline position="alternate-reverse">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={timelineCard}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Hackney Town Hall - 10:00 </Typography>
            <Typography variant="body1">Please arrive by 9:45, for a 10 start. Any latecomers will have to wait outside until the ceremony is over. We don't want to you to miss it!</Typography>
            </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={timelineCard}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Overground - 11:00</Typography>
            <Typography variant="body1">After the ceremony, we'll head to the Overground station to catch the quick train to our final destination - <strong>The Spread Eagle Pub</strong>. </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={timelineCard}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Spread Eagle Pub - 11:30</Typography>
            <Typography variant="body1">We arrive at our lovely venue for lunch, cake, drinks and some light hearted fun. </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={timelineCard}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Thanks for coming! </Typography>
            <Typography variant="body1">We hope you have a wonderful time and enjoyed our little celebration! </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
