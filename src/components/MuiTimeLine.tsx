import { Timeline,TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent,TimelineDot, TimelineOppositeContent} from "@mui/lab"

export const MuiTimeLine = ()=>{
    return (
        <Timeline position='alternate'>
            <TimelineItem>
                <TimelineOppositeContent>09:30am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='secondary' variant="outlined" />
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    City A
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineOppositeContent>10:00am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='secondary' variant="outlined"/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    City B
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineOppositeContent>10:30am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='secondary' variant="outlined"/>
                </TimelineSeparator>
                <TimelineContent>
                    City C
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}