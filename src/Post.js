import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className='post'>
            <div className='post__avatar'>
                <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>
                            akshit
                            <span className='post__headerSpecial'>
                                <VerifiedUserIcon className='post__badge' />
                                @akshit
                            </span>
                        </h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>build</p>
                    </div>
                </div>
                <img src='https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnV0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' alt='' />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post