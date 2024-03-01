import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Carousel, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ProfileComp from './profileComp.js';




const PROFILES_URL = `https://65a096c3600f49256fb0123d.mockapi.io/api/v1/Profiles`
const Posts = (props) => {
    let { id: browserId } = useParams()

    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        fetch(PROFILES_URL)
        .then((res) => res.json())
        .then((data) => {
            setPosts(data);
        })
    }, []);
    //useEffect cannot be called conditionally --- call in profiles right away? 
    /// Parse information later?
    let ProfileId = browserId;
    // if (props === 'number') {
    //     
    // } else {
    //     let ProfileId = [PROFILES_URL.length]
    // }

    console.log(PROFILES_URL.length)

// TODO profiles.length, for each profile, take the id and place it in API_URL, and GET data to make a Post
//use Users hook to get profile info for posts (less code) 
    
    const API_URL = `https://65a096c3600f49256fb0123d.mockapi.io/api/v1/Profiles/${ProfileId}/Posts/`
    const user = ProfileComp(ProfileId);
    //setup: if an id is passed, map through all posts attached to id
//if there is not an id passed, all available posts from all users are mapped
    //console.log(post)
    //console.log({ProfileId})
    //let avatarSrc = `${PROFILE_URL}${ProfileId}.avatar`;

    return (
        <Container>
            {posts.length > 0 && posts.map((post) => {
                const  {
                    id,
                    content,
                    images,
                    timeStamp,
                    location,
                    likes,
                    shares,
                    comments, 
                } = post; 
                return (
                    <Card key={id} post={post}>
                <Card.Header>
                    <Link to={`/profile/${user.id}`}>
                    <img className="profilePicSm" src={user.avatar} />
                    {user.username} {id}
                    </Link>
                    <div>{timeStamp}</div>
                </Card.Header>
                <Card.Img variant="top" />
            </Card>
                )
                } 
            
            )}
        </Container>
        
    )
}

export default Posts;
