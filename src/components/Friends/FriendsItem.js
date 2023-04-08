import PropTypes from 'prop-types';
import clsx from "clsx";
import './Friends-item.css'

export const FriendsItem = ({ avatar, name, isOnline }) => {
    return (
        <li className='friend-list__item'>
            <span className={clsx({online: isOnline, offline: !isOnline})}></span>
            <img className='avatar' src={avatar} alt="User avatar" width="60" />
            <p className='name'>{name}</p>
        </li>
    );
};

FriendsItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
