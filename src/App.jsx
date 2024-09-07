import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const feedbackCount = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const totalFeeback = feedbackCount.good + feedbackCount.neutral + feedbackCount.bad;
  return (
    <>
      <Description />
      <Options />
      {totalFeeback > 0 && (<Feedback feedbackCount={feedbackCount} />)}
      {totalFeeback === 0 && (<Notification />)}
    </>
  );
};

export default App;
