import { FriendsItem } from "./FriendsItem";
import "./Friend-list.css";

export const FriendList = ({friends}) => {
    return (<ul className='friend-list'>
				{friends.map((friend) => {
					return <FriendsItem key={friend.id} {...friend} />;
				})}
    </ul>);
};
