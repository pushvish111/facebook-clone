import {Avatar} from "@material-ui/core";
import React from 'react'
import "./Story.css";

function Story({image, profilesrc, title}) {
    return (
        <div style ={{ backgroundImage: 'url(https://scontent.fvns2-1.fna.fbcdn.net/v/t1.6435-1/p160x160/168443529_455796682403191_4825558802256125977_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_ohc=tXbMGBUVTEYAX8hCM3U&_nc_ht=scontent.fvns2-1.fna&tp=6&oh=f01386527fda63490a7f8ee8c1073052&oe=60DF65EE)' }} className ="story">
            <Avatar src = {profilesrc} className ="story__avatar" />
            <h4>{title}</h4>
        </div>
    )
}

export default Story
