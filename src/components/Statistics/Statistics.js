import PropTypes from 'prop-types';
import { Wrap, List, Total, Feedback } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <Wrap>
    <List>Good: {good}</List>
    <List>Neutral: {neutral}</List>
    <List>Bad: {bad}</List>
    <Total>Total: {total}</Total>
    <Feedback>Positive feedback: {positivePercentage} %</Feedback>
  </Wrap>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
