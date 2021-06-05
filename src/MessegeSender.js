import React,  {useState} from 'react';
import {Avatar} from '@material-ui/core';
import "./MessegeSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from "./StateProvider";

function MessegeSender() {
    const[{user}, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //some database errors

        setInput("");
        setImageUrl("");
    };

    return (
        <div className="messegeSender">
            <div className="messegeSender__top">
                <Avatar 
                    src = {user.photoURL}
                />
               <form >
                    <input
                        className="messegeSender__input" 
                        type= "text" 
                        placeholder={"What's on your mind, ${user.displayName} "} 
                        value = {input}
                        onChange = {(e) => setInput(e.target.value)}
                    />
                     <input 
                        placeholder="image URL {optional}" 
                        type="text" 
                        value = {imageUrl}
                        onChange = {(e) => setImageUrl(e.target.value)}    
                    />

                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className="messegeSender__bottom">
                <div class="messegeSender__option">
                    <VideocamIcon style ={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div class="messegeSender__option">
                    <PhotoLibraryIcon style ={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div class="messegeSender__option">
                    <InsertEmoticonIcon style ={{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessegeSender;
