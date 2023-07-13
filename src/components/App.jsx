import { Profile } from "./Profile/Profile";
import user from '../user.json';
import { Statistics } from "./Statistics/Statistics";
import data from "../data.json"

const parentEl = document.getElementById('root');

export const App = () => {
  return (
    <> <Profile cards={user} key={user.username} username={user.username} tag={user.tag} location={user.location} avatar={user.avatar}
      followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes} />
     
        <Statistics
          
          title={'Upload stats'}
         stats={data}
         
        /> 
      
    </>
  );
};


