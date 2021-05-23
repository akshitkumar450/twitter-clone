import React from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'

function Feed() {
    return (
        <div className='feed'>
            {/**Header */}
            <div className='feed__header'>
                <h2>HOME</h2>
            </div>

            {/**tweetBox */}
            <TweetBox />
            {/**posts */}
            <Post />
            <Post />
            <Post />
            {/**posts */}
            {/**posts */}
            {/**posts */}
            {/**posts */}
        </div>
    )
}

export default Feed
