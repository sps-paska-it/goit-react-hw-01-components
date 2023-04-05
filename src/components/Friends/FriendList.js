import { FriendsItem } from "./FriendsItem";

export const FriendList = ({friends}) => {
    return (<ul className="friend-list">
				{friends.map((friend) => {
					return <FriendsItem key={friend.id} {...friend} />;
				})}
    </ul>);
};
