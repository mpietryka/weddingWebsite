import { Box, Divider, Typography } from '@mui/material'
import { sectionBase, sectionInner, centerRow } from './styles'
import scheduleData from '../data/schedule.json'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined'

import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import { ScheduleItem } from '../components'

export default function Schedule() {
  return (
    <Box
      id="schedule"
      component="section"
      sx={{ ...sectionBase, px: { xs: '16px', md: 0 } }}
    >
      <Box sx={sectionInner}>
        <Box sx={centerRow}>
          <Typography variant="h4" component="h2" sx={{fontWeight: 500}}>
            Schedule
          </Typography>
        </Box>
        <Box sx={centerRow}>
        <Typography variant="body1" sx={{fontWeight: 300, textAlign: 'center'}}>
            Saturday, 6 June 2026
          </Typography>
          </Box>
        <Divider sx={{ width: '100%', borderColor: 'rgba(0, 0, 0, 0.12)', marginBottom: 4 }} />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}>
          <ScheduleItem
            time="9:45"
            title="Ceremony"
            description={scheduleData.text1}
            subsections={[
              { icon: <LocationOnOutlinedIcon />, text: scheduleData.weddinglocation, link: "https://maps.app.goo.gl/jS5zdmdVHGmrzdzi9" },
              { icon: <CheckroomOutlinedIcon/>, text: scheduleData.dresscode },
            ]}
          />

          <ScheduleItem
            time="11:00"
            title="Overground"
            description={scheduleData.text2}
            subsections={[
              { icon: <TrainOutlinedIcon />, text: "Hackney Central → Homerton" }
            ]}
          />

          <ScheduleItem
            time="11:30"
            title="Reception"
            description={scheduleData.text3}
            subsections={[
              { icon: <LocationOnOutlinedIcon />, text: scheduleData.receptionlocation, link: "https://maps.app.goo.gl/8THDfSnJj7zUbrRX7" },
              { icon: <CheckroomOutlinedIcon/>, text: scheduleData.dresscode }
            ]}
          />
        </Box>
      </Box>
    </Box>
  )
}
