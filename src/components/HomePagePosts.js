import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useSelector } from 'react-redux'
import { backendServerURL } from '../utils/util';
import PostsUI from '../ui/PostsUI';

const HomePagePosts = () => {
    const userID = useSelector((store) => store.userSlice.userID);
    const { data, error, isPending } = useQuery({
        queryFn: async () => {
            const res = await fetch(backendServerURL + 'explore/posts', {
                headers: {
                    userID
                }
            });
            const resData = await res.json();
            return resData;
        },
        queryKey: ['posts'],
        staleTime: 100*30,
    })
    if (isPending) {
        return 'Loading...';
    }
    if (error) {
        console.error(error);
        return;
    }
    const posts = data;
    // console.log(posts);
    return (<>
        {posts.map((post) => <PostsUI post={post} key={post.post_id} />
        )}
    </>
    )
}

export default HomePagePosts