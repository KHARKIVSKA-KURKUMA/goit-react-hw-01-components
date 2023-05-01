import PropTypes from 'prop-types';
import { Wrapper, TableHead, HeadCell, Row, Cell } from './Transactions.styled';
const Transactions = ({ items }) => {
  return (
    <Wrapper>
      <TableHead>
        <Row>
          <HeadCell>Type</HeadCell>
          <HeadCell>Amount</HeadCell>
          <HeadCell>Currency</HeadCell>
        </Row>
      </TableHead>
      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <Row key={id} accent={index % 2 !== 0}>
            <Cell className="capitalize">{type}</Cell>
            <Cell>{amount}</Cell>
            <Cell>{currency}</Cell>
          </Row>
        ))}
      </tbody>
    </Wrapper>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Transactions;
