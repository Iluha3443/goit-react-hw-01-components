import './FriendList.css'
import PropTypes, { bool } from 'prop-types';

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
           
            {friends.map((data) => (
                 
                <li key={data.id} className="item-friends">
                   {data.isOnline ? (
            <span className="status-online"></span>
          ) : (
            <span className="status-offline"></span>
          )}
  
  <img className="avatar" src={data.avatar} alt="User avatar" width="48" />
  <p className="name-friends">{data.name}</p>
</li>
            ) )}
</ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }
    ))
}