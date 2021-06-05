import React, {useState, useEffect} from 'react'
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessegeSender from "./MessegeSender";
import Post from "./Post";
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        db.collection('posts').onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) =>({ id:doc.id, data: doc.data() })))
        })
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessegeSender />

            {posts.map((post) => {
                console.log(post);
                <Post
                    key={post.id}
                    profilePic = {post.data.profilePic}
                    messege = {post.data.message}
                    timestamp = {post.data.timestamp}
                    username = {post.data.username}
                    imageUrl = {post.data.image}
                />
            })}
            
            <Post 
                profilePic = 'https://scontent.fvns2-1.fna.fbcdn.net/v/t1.6435-1/p160x160/168443529_455796682403191_4825558802256125977_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_ohc=tXbMGBUVTEYAX8hCM3U&_nc_ht=scontent.fvns2-1.fna&tp=6&oh=f01386527fda63490a7f8ee8c1073052&oe=60DF65EE'
                messege = 'Wow its working!'
                timestamp = 'this is a timestamp'
                username= 'pv'
                image ='https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg'
            />
            <Post
                profilePic = 'https://scontent.fvns2-1.fna.fbcdn.net/v/t1.6435-1/p160x160/168443529_455796682403191_4825558802256125977_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_ohc=tXbMGBUVTEYAX8hCM3U&_nc_ht=scontent.fvns2-1.fna&tp=6&oh=f01386527fda63490a7f8ee8c1073052&oe=60DF65EE'
                messege = 'Wow its working!'
                timestamp = 'this is a timestamp'
                username= 'pv'
            />
            <Post
                profilePic = 'https://scontent.fvns2-1.fna.fbcdn.net/v/t1.6435-1/p160x160/168443529_455796682403191_4825558802256125977_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_ohc=tXbMGBUVTEYAX8hCM3U&_nc_ht=scontent.fvns2-1.fna&tp=6&oh=f01386527fda63490a7f8ee8c1073052&oe=60DF65EE'
                messege = 'Wow its working!'
                timestamp = 'this is a timestamp'
                username= 'pv'
            />

        </div>


    )
}

export default Feed;
