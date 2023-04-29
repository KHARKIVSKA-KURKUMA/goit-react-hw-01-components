import PropTypes from 'prop-types';

import {
  Wrapper,
  Item,
  OnlineLabel,
  Avatar,
  Title,
  Link,
} from './Friends.styled';
const Friends = ({ data }) => {
  const renderList = () =>
    data.map(({ id, isOnline, name, avatar, link }) => (
      <Link key={id} href={link} target="_blank">
        <Item>
          <OnlineLabel isOnline={isOnline} />
          <Avatar src={avatar} alt={name} />
          <Title>{name}</Title>
        </Item>
      </Link>
    ));

  return <Wrapper>{data && renderList()}</Wrapper>;
};

Friends.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Friends;
