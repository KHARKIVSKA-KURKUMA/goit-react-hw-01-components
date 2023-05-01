import PropTypes from 'prop-types';

import { Item, OnlineLabel, Avatar, Title, Link } from './FriendList.styled';

export default function FriendList({ isOnline, name, avatar, link }) {
  return (
    <Link href={link} target="_blank">
      <Item>
        <OnlineLabel isOnline={isOnline} />
        <Avatar src={avatar} alt={name} />
        <Title>{name}</Title>
      </Item>
    </Link>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
