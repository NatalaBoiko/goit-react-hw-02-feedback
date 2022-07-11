import PropTypes from 'prop-types';
import './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const stateArr = Object.keys(options);
  // console.log(stateArr);

  return (
    <div>
      {stateArr.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
