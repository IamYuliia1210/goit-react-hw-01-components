import {
  Wrapper,
  Description,
  Images,
  Statistics,
  ListItem,
  List,
  Text,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <Description>
        <Images src={avatar} alt="user avatar" className="avatar" />
        <h1 className="name">{username}</h1>
        <Text className="tag">{'@' + tag}</Text>
        <Text className="location">{location}</Text>
      </Description>

      <List>
        <ListItem>
          <span className="label">Followers</span>
          <Statistics>{stats.followers}</Statistics>
        </ListItem>
        <ListItem>
          <span className="label">Views</span>
          <Statistics>{stats.views}</Statistics>
        </ListItem>
        <ListItem>
          <span className="label">Likes</span>
          <Statistics>{stats.likes}</Statistics>
        </ListItem>
      </List>
    </Wrapper>
  );
};
