import { React, useState, useEffect, useRef } from "react";
import { Card, Row, Container, Col, Button, Dropdown, Modal, DropdownButton, Form, Collapse } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";

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
import defaultUserPic from '../../Icons/icons8-user-default-50.png';
import submit from '../../Icons/icons8-right-button-50.png';



const Posts = (props) => {
    const posts = props.posts
    let { id: UserId } = useParams();
    let user = ProfileComp(UserId); 
    let myId = Math.floor(props.id);

    const [updatePost, setUpdatePost] = useState("");
    const [updatedContent, setUpdatedContent] = useState("")

    const handleContent = (e) => {
      setUpdatedContent(e.target.value);
    };
  
    const [open, setOpen] = useState(false);

    const handleOpen = (e, id) => {
        setUpdatePost(id)
        setOpen(true);
        console.log("OPEN IS NOW: ", open, updatePost)
    };
 
    const handleClose = () => {
        setOpen(false);
    };
 
    const updateHandler = () => {
        
    }

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

                if (ProfileId === UserId) {
                    return (
                    <Card className="post-cards" key={`${user.id}${id}`} post={post}>
                        <Card.Header>
                            <Row className="post-header">
                                <Col md="1">
                                    <Button href={`./${user.id}`} className="trans-btn">
                                        <img className="profilePicSm" src={user.avatar} alt={user.id}/>
                                    </Button>
                                </Col>
                                <Col md="8">
                                    <Link to={`/profile/${user.id}`} className="post-username" >{user.username}</Link>
                                </Col>
                                <Col md="2" >
                                    <span className="timestamp">{TimeStamp(timestamp)}</span>
                                </Col>
                                <Col md="1">
                                    <DropdownButton align="end" className="trans-btn" title={<img className="post-dots" alt="dots" src={dots}/>}>
                                        <Dropdown.Item eventKey={`1${id}`}>Delete</Dropdown.Item>
                                        <Dropdown.Item eventKey={`2${id}`} onClick={(e) => {handleOpen(e, id)}}>Update</Dropdown.Item>
                                        
                                    </DropdownButton>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body className="post-card-body">
                            {open === true && updatePost === id ?
                            <Row>
                                <Col md="10">
                                    <Form>
                                        <Form.Group>
                                            <Form.Control 
                                                className="new-post-input" 
                                                id="updateContentInput"
                                                type="text" 
                                                value={updatedContent}
                                                onChange={handleContent}
                                                placeholder={content}>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col md="2">
                                    <Button className="new-post-submit-btn trans-btn" type="submit" onClick={updateHandler}>
                                        <img className="new-post-submit-img" src={submit} alt="submit"/>
                                    </Button>
                                </Col>
                            </Row>
                             : <p className="post-content">{content}</p>}
                        </Card.Body>
                        <Card.Img className="card-body-post" src={images} />
                        <Row className="post-interactions">
                            <Col md="3">
                                <Card.Text> 
                                    <Button className="trans-btn"><img className="super-like" src={comment} alt="go to comments"/></Button>
                                    {comments.length}
                                </Card.Text>
                            </Col>
                            <Col md="3">
                                <Card.Text>
                                    <Button className="trans-btn"><img className="vote up-vote" alt="up vote" src={up}/></Button>
                                    {likes}
                                    <Button className="trans-btn"><img className="vote down-vote"  alt="down vote" src={down}/></Button>
                                </Card.Text>
                            </Col>
                            <Col md="3">
                                <Card.Text>  
                                    <Button className="trans-btn"><img className="super-like" alt="bookmark" src={bookmark}/></Button>
                                </Card.Text>
                            
                            </Col>
                            <Col md="3">
                                <Card.Text>
                                    <Button className="trans-btn"><img className="super-like" src={star} alt="super like"/></Button>
                                    {superLikes}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row className="comments-container">
                            <Comments props={{limit:"2", post:{post}, props:{props}}}/>
                        </Row>
                    </Card>
                )
            } else {
                return (
                    <div></div>
                )
            }
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

export default Posts;
