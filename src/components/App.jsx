import { Profile } from "./Profile/Profile";
import user from '../user.json';



export const App = () => {
  return (
    <div><Profile cards={user} key={user.username} username={user.username} tag={user.tag} location={user.location} avatar={user.avatar}
    followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes}/></div>
  );
};
