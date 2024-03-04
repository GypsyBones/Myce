import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Carousel, Container, CardBody, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import '../Pages/Profile.css';

import ProfileComp from './profileComp.js';
import Debug from '../Other/Debug.js';
import TimeStamp from '../Other/TimeStamp.js';
import Comments from './Comments.js'

import dots from '../../Icons/icons8-dots-50.png';
import star from '../../Icons/icons8-army-star-50.png';
import bookmark from '../../Icons/icons8-pin-64.png';
import comment from '../../Icons/icons8-ellipsis-48.png';
import up from '../../Icons/icons8-chevron-up-50.png';
import down from '../../Icons/icons8-chevron-down-50.png';

const ProfilePosts = (props) => {
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
    Debug("Posts.js props", props.props)
    let user = ProfileComp(UserId);    
    //Debug("Posts: userId", UserId)
    //Debug("Posts.js: Posts Length", POSTS_URL.length)
    

    return (
        <Container>
            {posts.length > 0 && posts.map((post) => {
                const  {
                    id,
                    content,
                    images,
                    timestamp,
                    likes,
                    superLikes,
                    comments,
                    ProfileId 
                } = post; 

                if (ProfileId == UserId) {
                    return (
                    <Card className="post-cards" key={id} post={post}>
                        <Card.Header>
                            <Row className="post-header">
                                <Col md="1">
                                    <img className="profilePicSm" src={user.avatar} />
                                </Col>
                                <Col md="8">
                                    <Link to={`/profile/${user.id}`} className="post-username" >{user.username}</Link>
                                </Col>
                                <Col md="2" >
                                    <span className="timestamp">{TimeStamp(timestamp)}</span>
                                </Col>
                                <Col md="1">
                                    <button className="trans-btn"><img className="post-dots" src={dots}/></button>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body className="post-card-body">
                            <p className="post-content">{content}</p>
                        </Card.Body>
                        <Card.Img className="card-body-post" src={images} />
                        <Row className="post-interactions">
                            <Col md="3">
                                <Card.Text> 
                                    <Button className="trans-btn"><img className="super-like" src={comment}/></Button>
                                    {comments.length}
                                </Card.Text>
                            </Col>
                            <Col md="3">
                                <Card.Text>
                                    <Button className="trans-btn"><img className="vote up-vote" src={up}/></Button>
                                    {likes}
                                    <Button className="trans-btn"><img className="vote down-vote" src={down}/></Button>
                                </Card.Text>
                            </Col>
                            <Col md="3">
                                <Card.Text>  
                                    <Button className="trans-btn"><img className="super-like" src={bookmark}/></Button>
                                </Card.Text>
                            
                            </Col>
                            <Col md="3">
                                <Card.Text>
                                    <Button className="trans-btn"><img className="super-like" src={star}/></Button>
                                    {superLikes}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row className="comments-container">
                            <Comments props={{limit:"2", post:{post}}}/>
                        </Row>
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
