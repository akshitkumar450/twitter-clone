import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
    return (
        <div className='tweetbox'>
            <form>
                <div className='tweetbox__input'>
                    <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                    <input type='text' placeholder="what's happening"></input>
                </div>
                <input className='tweetbox__imageInput' placeholder="enter image url"></input>
                <Button className='tweetbox__tweetBtn'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
