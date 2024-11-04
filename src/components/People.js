import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { backendServerURL } from '../utils/util';
import { useSelector } from 'react-redux';

const People = () => {
    const userID = useSelector((store) => store.userSlice.userID);
    const [isActionButtonFollow, setIsActionButtonFollow] = useState(true);
    const { mutate: toggleFollow } = useMutation({
        mutationFn: async (data) => {
            const res = await fetch(backendServerURL + 'user/follow', {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                method: 'POST'
            })
            const resData = await res.json();
            if (!resData.ok) {
                throw new Error('Error in following/unfollowing');
            }
            return resData;
        },
        onMutate: () => {
            setIsActionButtonFollow((prev) => !prev);

        },
        onError: () => {

        },
        onSettled: () => { }
    });
    const { data, isPending, error } = useQuery({
        queryFn: async () => {
            const res = await fetch(backendServerURL + 'explore/people', {
                headers: {
                    userID
                }
            });
            const resData = await res.json();
            return resData;
        },
        queryKey: ['suggestions'],
    })
    if (isPending) {
        return 'loading...';
    }
    if (error) {
        console.error(error);
        return;
    }
    const users = data;

    const toggleFollowHandler = (followerID) => {
        console.log('logging id - ', followerID);
        const data = { userID: userID, followerID: followerID, isActionFollow: isActionButtonFollow };
        toggleFollow(data);
    }
    return (
        <div>
            <div className='flex gap-3 mb-5'>
                <div>People you may know</div>
                <button>See All</button>
            </div>
            <div>
                {users.map((user) => <div className='flex items-center justify-between mb-3' key={user.USERNAME}>
                    <div className='flex items-center gap-3'>
                        <div><img className='h-12 w-12 rounded-full' src={user.PROFILE_PICTURE} alt={user.NAME} /></div>
                        <div>
                            <div>{user.USERNAME}</div>
                            <div>{user.NAME}</div>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => toggleFollowHandler(user.USER_ID)} className='text-blue-500 hover:text-blue-600'>{isActionButtonFollow ? 'Follow' : 'Unfollow'}</button>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default People