import PropTypes from 'prop-types';
import {
  Wrapper,
  Description,
  Avatar,
  LineText,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';
const Profile = ({ username, tag, location, avatar, stats }) => (
  <Wrapper>
    <Description>
      <Avatar src={avatar} alt={username} />
      <LineText>{username}</LineText>
      <LineText className="subtitle">@{tag}</LineText>
      <LineText className="subtitle">{location}</LineText>
    </Description>
    <StatsList>
      <StatsItem>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </StatsItem>
    </StatsList>
  </Wrapper>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
