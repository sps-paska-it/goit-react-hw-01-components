import PropTypes from 'prop-types';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile"
    style={{
        margin: '0 auto',
        width: 300,
      }}>
      <div className="description">
        <img
          src={avatar}
          alt={username}
          className="avatar"
        />
        <p
          className="name"
          style={{
            fontWeight: 700,
            fontSize: 22,
            margin: '20px auto 0 auto',
            textAlign: 'center',
          }}
        >
          {username}
        </p>
        <p
          className="tag"
          style={{
            margin: '10px auto 0 auto',
            textAlign: 'center',
          }}
        >
          {tag}
        </p>
        <p
          className="location"
          style={{
            margin: '10px auto 0 auto',
            textAlign: 'center',
          }}
        >
          {location}
        </p>
      </div>

      <ul
        className="stats"
        style={{
          border: '1px solid black',
          marginTop: 30,
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <li
          style={{
            backgroundColor: '#fff',
            width: 'calc(100% /3)',
          }}
        >
          <span
            className="label"
            style={{
              display: 'block',
            }}
          >
            Followers
          </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li
          style={{
            backgroundColor: '#9c9c9c',
            width: 'calc(100% /3)',
          }}
        >
          <span
            className="label"
            style={{
              display: 'block',
            }}
          >
            Views
          </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li
          style={{
            backgroundColor: '#fff',
            width: 'calc(100% /3)',
          }}
        >
          <span
            className="label"
            style={{
              display: 'block',
            }}
          >
            Likes
          </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
  };