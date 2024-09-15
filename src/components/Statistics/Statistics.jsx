import PropTypes from "prop-types";

export const Statistics = ({
  good,
  positivePercentage,
  neutral,
  total,
  bad,
}) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total} </p>
      <p>Positive feedback: {positivePercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  positivePercentage: PropTypes.number,
  total: PropTypes.number,
};
