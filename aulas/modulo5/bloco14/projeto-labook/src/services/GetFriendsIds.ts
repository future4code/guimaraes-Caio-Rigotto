export const GetFriendsIds = (queryResult: any) => {
    const friends: {}[] = []

    queryResult.forEach((friend: { sender_id: {}; receiver_id: {}; }) => {
        if (friends.indexOf(friend.sender_id) === -1) {
            friends.push(friend.sender_id)
        }

        if (friends.indexOf(friend.receiver_id) === -1) {
            friends.push(friend.receiver_id)
        }
    });

    return friends
}
