import css from './FriendList.module.css'
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
           
            {friends.map((data) => (
                 
                <li key={data.id} className={css.itemFriends}>
                   {data.isOnline ? (
            <span className={css.statusOnline}></span>
          ) : (
            <span className={css.statusOffline}></span>
          )}
  
  <img className={css.avatar} src={data.avatar} alt="User avatar" width="48" />
  <p className={css.nameFriends}>{data.name}</p>
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