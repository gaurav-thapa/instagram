import React from 'react'
import { backendServerURL } from '../utils/util';
import { useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const PostsUI = ({ post }) => {
    const userID = useSelector((store) => store.userSlice.userID);
    const queryClient = useQueryClient();
    const { mutate: likePost } = useMutation({
        mutationFn: async (data) => {
            const res = await fetch(backendServerURL + 'post/like', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(data)
            });
            if (!res.ok) {
                throw new Error('Error liking/unliking post');
            }
            const resData = await res.json();
            return resData;
        },
        onMutate: async (likeData) => {
            //cancel ongoing queries
            queryClient.cancelQueries(['posts']);

            //snapshot previous state
            const prev = queryClient.getQueryData(['posts']);

            //optimistically update the cache
            queryClient.setQueryData(['posts'], (oldData) => {
                return oldData.map((p) => p.post_id === likeData.postID ? {
                    ...p,
                    is_liked_by_user: likeData.isLiked ? 1 : 0,
                    total_like_count: likeData.isLiked ? p.total_like_count + 1 : p.total_like_count - 1,
                } : p)
            })

            //return context for rollback
            return { prev };
        },
        onError: (context) => {
            queryClient.setQueryData(['posts'], context.prev);
        },
        onSettled: () => {
         }

    })

    const likePostHandler = () => {
        const likeData = {
            userID,
            postID: post.post_id,
            isLiked: post.is_liked_by_user === 0 ? true : false,
        }
        likePost(likeData);
    };
    return (
        <div className='border-b-2 border-gray-700 mt-3'>
            <div className='mb-8'>
                <div className='flex gap-3 items-center mb-3'>
                    <img className='h-12 w-12 rounded-full' src={post.profile_picture} alt={post.NAME} />
                    <div>{post.username}</div>
                    <div>{post.created_date}</div>
                </div>
                <img className=' rounded mb-3' src={post.media_url} alt={post.post_id} />
                <div className='flex items-center gap-3'>
                    <i onClick={likePostHandler} className={`text-2xl bi ${post.is_liked_by_user ? 'bi-heart-fill text-red-600' : 'bi-heart'}`}></i>
                    <i className="text-2xl bi bi-chat"></i>
                </div>
                <div>{post.total_like_count === 0 ? 'No likes yet' : (post.total_like_count + ' like' + (post.total_like_count === 1 ? '' : 's'))}</div>
                {post.caption &&
                    <div className='flex gap-3'>
                        <div className='font-bold'>{post.username}</div>
                        <div>{post.caption}</div>
                    </div>}
            </div>
        </div>
    )
}

export default PostsUI