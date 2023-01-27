import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import { Container } from './App.Styled';


export const App = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onleaveFeedback = (feedback) => {
        switch (feedback) {
            case 
                'good':
                setGood(prevGood => prevGood + 1);
                break;
            case
                'neutral':
                setNeutral(prevNeutral => prevNeutral + 1);
                break;
            case
                'bad':
                setBad(prevBad=>prevBad + 1);
                break;

            default:
                alert('Invalid reviews type');
        };
    };

    const options = Object.keys({ good, neutral, bad});

    const countTotalFeedback = good + neutral + bad;

    const countPositiveFeedbackPercentage = Math.round((good / countTotalFeedback) * 100);

        return (
            <Container>
                <Section title="Please leave feedback">
                <FeedbackOptions options={options} onLeaveFeedback={onleaveFeedback}/>
                </Section>
                {!countTotalFeedback ? 
                    (<Notification message="There is no feedback" />) :
                (<Section title="Statistics">
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage}/>
                </Section>)}
            </Container>
        );
    };


export default App