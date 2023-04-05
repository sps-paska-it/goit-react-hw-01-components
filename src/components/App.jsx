import PropTypes from 'prop-types';
import { Profile } from './Profile/Profile';
import user from '../user.json';
import { StatisticList } from './Statistics/StatisticList';
import data from '../data.json';
import { FriendList } from './Friends/FriendList';
import friends from "../friends.json";
import { TransactionHistory } from './Transaction/TransactionHistory';
import transactions from '../transactions.json';

export const App = () => {
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
                color: '#010101',
            }}
        >
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <StatisticList title="Upload stats" stats={data} />
            <FriendList friends={friends}/>
            <TransactionHistory items={transactions} />;
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
