import React, { useEffect, useState } from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import db from './firebase'

function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').onSnapshot((snapshot) => {
            return (
                setPosts(snapshot.docs.map((doc) => {
                    return (
                        doc.data()
                    )
                }))
            )
        })
    }, [])

    return (
        <div className='feed'>
            {/**Header */}
            <div className='feed__header'>
                <h2>HOME</h2>
            </div>

            {/**tweetBox */}
            <TweetBox />
            {/**posts */}

            {
                posts.map((post) => {
                    return (
                        <Post
                            displayName={post.displayName}
                            username={post.username}
                            verified={post.verified}
                            image={post.image}
                            text={post.text}
                            avatar={post.avatar}
                        />
                    )
                })
            }

            {
                /*<Post
                displayName='akshit'
                username='@akshit'
                verified={true}
                image='https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnV0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
                text='twitter clone'
                avatar='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'
            />
            <Post
                displayName='akshit'
                username='@akshit'
                verified={false}
                image='https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnV0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
                text='twitter clone'
                avatar='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'
            />*/}

        </div>
    )
}

export default Feed
