import { React, useState } from "react";
import { Card, Row, Container, Col, Button, Dropdown,  DropdownButton, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";

import '../Pages/Profile.css';

import ProfileComp from './profileComp.js';
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



const Posts = ( props ) => {
    //Homeposts is similar to posts, but it differs 
    const POSTS_URL = `https://65a096c3600f49256fb0123d.mockapi.io/api/v1/Posts`
    let posts = props.posts
    let myId = Math.floor(props.id);
    let user = ProfileComp(myId);
    //the user is gained through the props rather than the browser

    console.log("Post.js:prop + myId:", myId, props);

    const [open, setOpen] = useState(false);
    //sets the open state for editing posts
    const [updatedPostId, setUpdatedPostId] = useState("");
    // sets state for PostId to be accessible for discerning which post the editing input field opens for
    const [updatedContent, setUpdatedContent] = useState("")
    //sets the state with the updated content,to be accessible for the UpdatePost function, and for filling the 
    //input field automatically upon opening
    console.log("Posts:content", updatedContent)
    
    const handleOpen = (post) => {
        console.log(post);
        setUpdatedPostId(post.id);
        setUpdatedContent(post.content)
        setOpen(!open);
        console.log("OPEN IS NOW: ", open, updatedPostId);
    };
    //this handles the open state, updates the postId, and updates the content

    const updatePost = (e, post, id) => {
        e.preventDefault()
        console.log('updatePost has been clicked', post)
  
        let updatedPost = {
          ...post, 
        content: updatedContent,
        }
        fetch(`${POSTS_URL}/${id}`, {
          method: 'PUT',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(updatedPost),
        })
        .then(setOpen(!open))
        .then(props.getPosts);
    }
    //a typical fetch update CRUD that ends with triggering the Open state and 
    //triggering the getPosts function that is passed through props


    const deletePost = (id) => {
        console.log('DeletePost is getting triggered')
      fetch(`${POSTS_URL}/${id}`, {
        method: 'DELETE'
      }).then(() => props.getPosts())
    }
  
    return (
        <Container>
            {posts.length > 0 && posts.map((post, ProfileId) => {
                const  {
                    id,
                    content,
                    images,
                    timestamp,
                    likes,
                    superLikes,
                    comments,
                } = post; 
                //this is where the issue comes in for this project, one that I couldn't configure in time
                //the data is destructured here, which means the profileId is only accessible here
                //I SHOULD be able to profileComp this to get the profile data returned and use that for the 
                //various information bits below, however, it causes too many renders and shuts the page down
                //which is ironic because that is exactly how the comments are done
                //so, while technically incorrect, it still 'works' and is fine for now
                console.log(ProfileId)
                return (
                    <Card className="post-cards" key={`${user.id}${id}`} post={post}>
                        <Card.Header>
                            <Row className="post-header">
                                <Col md="1">
                                    <Button href={`./${user.id}`} className="trans-btn">
                                        <img className="profilePicSm" src={user.avatar || defaultUserPic} alt={user.id}/>
                                    </Button>
                                </Col>
                                <Col md="8">
                                    <Link to={`/profile/${user.id}`} className="post-username" >{user.username}</Link>
                                </Col>
                                <Col md="2" >
                                    <span className="timestamp">{TimeStamp(timestamp)}</span>
                                </Col>
                                <Col md="1">
                                    <DropdownButton className="trans-btn" title={<img className="post-dots" alt="dots" src={dots}/>}>
                                        <Dropdown.Item>
                                            <Button className="trans-btn dropdown-post" onClick={() => deletePost(id)}>Delete</Button>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                             <Button className="trans-btn dropdown-post" onClick={() => handleOpen(post)}>Edit</Button>
                                        </Dropdown.Item>
                                    </DropdownButton>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body className="post-card-body">
                            {open === true && updatedPostId === id  && updatedPostId === myId ?
                            <Row>
                                <Form>
                                    <Form.Group className="col md-10">
                                        <Form.Control 
                                                className="new-post-input" 
                                                id="updateContentInput"
                                                type="text" 
                                                value={updatedContent}
                                                onChange={(e) => setUpdatedContent(e.target.value)}>
                                        </Form.Control>
                                    </Form.Group>
                                    <Button className="col new-post-submit-btn trans-btn md-3" type="submit" onClick={(e) => updatePost(e, post, id)}>
                                        <img className="new-post-submit-img" src={submit} alt="submit"/>
                                    </Button>
                                </Form>
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
                            <Comments limit={"2"} post={post} id={myId} />
                        </Row>
                    </Card>
                )
        })}
        </Container> 
    )} 

export default Posts;
