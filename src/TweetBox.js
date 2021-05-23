import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';
import firebase from 'firebase'

function TweetBox() {
    const [inputMessage, setInputMessage] = useState('')
    const [image, setImage] = useState('')

    const sendTweet = (e) => {
        e.preventDefault()
        db.collection('posts').add({
            displayName: 'emilly',
            username: '@emily',
            verified: true,
            text: inputMessage,
            image: image,
            avatar: image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        })

        setImage('')
        setInputMessage('')
    }

    return (
        <div className='tweetbox'>
            <form>
                <div className='tweetbox__input'>
                    <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                    <input
                        onChange={(e) => setInputMessage(e.target.value)}
                        value={inputMessage}
                        type='text'
                        placeholder="what's happening">
                    </input>
                </div>
                <input
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    className='tweetbox__imageInput'
                    placeholder="enter image url">
                </input>
                <Button onClick={sendTweet} type='submit' className='tweetbox__tweetBtn'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
