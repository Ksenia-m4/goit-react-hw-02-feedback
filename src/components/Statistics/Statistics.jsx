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
