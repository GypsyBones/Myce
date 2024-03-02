import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Carousel, Container, CardBody, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ProfileComp from './profileComp.js';
import Debug from '../Debug.js';


const ProfilePosts = (props) => {
    Debug("Posts.js", props)
    const POSTS_URL = `https://65a096c3600f49256fb0123d.mockapi.io/api/v1/Posts`
    const [ posts, setPosts ] = useState([]);
        useEffect(() => {
            fetch(POSTS_URL)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            })
        }, []);
    

    let UserId = props.props;
    let user = ProfileComp(UserId);    
    Debug("Posts: userId", UserId)
    Debug("Posts.js: Posts Length", POSTS_URL.length)


    return (
        <Container>
            {posts.length > 0 && posts.map((post) => {
                const  {
                    id,
                    content,
                    images,
                    timestamp,
                    location,
                    likes,
                    shares,
                    comments,
                    ProfileId 
                } = post; 
                Debug("Posts/const:post : timeStamp", timestamp)
                if (ProfileId == UserId) {
                    return (
                    <Card className="post-cards" key={id} post={post}>
                        <Card.Header>
                            <Row className="post-header">
                                <Col md="1">
                                    <img className="profilePicSm" src={user.avatar} />
                                </Col>
                                <Col md="7">
                                    <Link to={`/profile/${user.id}`}>{user.username}</Link>
                                </Col>
                                <Col md="4" className="timestamp">
                                    <span >{timestamp}</span>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <p>{content}</p>
                        </Card.Body>
                        <Card.Img className="card-body-post" src={images} />
                        
                    </Card>
                )
            };
        })}
        </Container> 
    )} 



// TODO profiles.length, for each profile, take the id and place it in API_URL, and GET data to make a Post
//use Users hook to get profile info for posts (less code) 
    
    
    //setup: if an id is passed, map through all posts attached to id
//if there is not an id passed, all available posts from all users are mapped
    //console.log(post)
    //console.log({ProfileId})
    //let avatarSrc = `${PROFILE_URL}${ProfileId}.avatar`;

export default ProfilePosts;
