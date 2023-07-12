import { Profile } from "./Profile/Profile";
import user from '../user.json';
import { Statistics } from "./Statistics/Statistics";
import stats from "../data.json"

const parentEl = document.getElementById('root');

export const App = () => {
  return (
    <div><Profile cards={user} key={user.username} username={user.username} tag={user.tag} location={user.location} avatar={user.avatar}
      followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes} />
      {stats.map(stat => (   
        <Statistics
          key={stat.id}
          title={stat.label}
          stats={stat.percentage}
        /> 
      )
      )}
    </div>
  );
};


