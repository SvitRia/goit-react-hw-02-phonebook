import { Notification } from "components/Notification/Notification"
import { Span, SpanList } from "./Statistics.styled"


export const Statistics = ({ good, neutral, bad, total, percent }) => {
   
    if (good === 0 && neutral === 0 && bad === 0) {
        return <Notification />
    } else {
        return (
            <div>
                <h2>Statistics</h2>
                <SpanList>
                <Span>Good: {good}</Span>
                <Span>Neutral: {neutral}</Span>
                <Span>Bad: {bad}</Span>
                <Span>Total: {total}</Span>
                <Span>Positiv Feedback: {percent}%</Span>
                </SpanList>
            </div>
        )
    }
}