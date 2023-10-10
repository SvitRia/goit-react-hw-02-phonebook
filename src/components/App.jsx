import { Component } from 'react';
import { Feedbackoptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeavFeedback = (key) => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };
  
  onTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (
      good + neutral + bad
    )
  }
  
  onCheckPositivFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
   
    return (
      Math.round(good / total * 100));
     
  }
 

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.onTotalFeedback();
    const persent = this.onCheckPositivFeedback();

 
      return (
        <div
          // style={{
          //   height: '100vh',
          //   display: 'flex',
          //   justifyContent: 'center',
          //   alignItems: 'center',
          //   fontSize: 40,
          //   color: '#010101',
          // }}
        >
          <Feedbackoptions onFeedback={this.onLeavFeedback} />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percent={persent}
          />
        </div>
      );
    };
  };

