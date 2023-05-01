import PropTypes from 'prop-types';
import FriendList from 'components/FriendList/FriendList';
import { Wrapper } from './Friends.styled';

const Friends = ({ data }) => {
  return (
    <Wrapper>
      {data.map(({ id, isOnline, name, avatar, link }) => (
        <FriendList
          key={id}
          isOnline={isOnline}
          name={name}
          avatar={avatar}
          link={link}
        />
      ))}
    </Wrapper>
  );
};

Friends.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
export default Friends;
