import PropTypes from 'prop-types';
import { Title, Card } from './Section.styled';

export const Section = ({ title, children }) => (
  <Card>
    <Title>{title}</Title>
    {children}
  </Card>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
