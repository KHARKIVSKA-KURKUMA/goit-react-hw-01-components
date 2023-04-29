import PropTypes from 'prop-types';
import {
  Wrapper,
  Title,
  StatList,
  StatItem,
  LineText,
} from './Statistics.styled';
const Statistics = ({ title, data }) => {
  const randomBg = () => 'hsla(' + Math.random() * 360 + ', 100%, 50%, 1)';

  const renderData = () =>
    data.map(({ id, label, percentage }) => (
      <StatItem key={id} bg={randomBg()}>
        <LineText>{label}</LineText>
        <LineText className="subtitle">{percentage}%</LineText>
      </StatItem>
    ));

  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <StatList>{data && renderData()}</StatList>
    </Wrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
