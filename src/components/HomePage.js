import React from 'react'
import People from './People'
import HomePagePosts from './HomePagePosts'

const HomePage = () => {
    return (
        <div className='flex p-10'>
            <div className='basis-2/3'>
                {/* <div>Story</div> */}
                <div className='w-2/3 mx-auto'><HomePagePosts /></div>
            </div>
            <div className='basis-1/3'><People /></div>
        </div>
    )
}

export default HomePage