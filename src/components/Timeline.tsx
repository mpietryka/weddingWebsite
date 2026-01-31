import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Typography } from '@mui/material';
import { timelineCard } from './styles';
import scheduleData from '../data/schedule.json';

export default function AlternateReverseTimeline() {
  return (
    <Timeline position="alternate-reverse" sx={{ padding: 0 }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={timelineCard}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{scheduleData.title1}</Typography>
            <Typography variant="body1">{scheduleData.text1}</Typography>
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
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{scheduleData.title2}</Typography>
            <Typography variant="body1">{scheduleData.text2}</Typography>
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
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{scheduleData.title3}</Typography>
            <Typography variant="body1">{scheduleData.text3}</Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={timelineCard}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{scheduleData.title4}</Typography>
            <Typography variant="body1">{scheduleData.text4}</Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
