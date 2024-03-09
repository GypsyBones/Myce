import { React, useState } from "react";
import { Card, Row, Container, Col, Button, Dropdown,  DropdownButton, Form } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";

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


const Posts = ({ posts, id, getPosts }) => {
    //passing through the posts, an id, and a getPosts function that sets the state of the page's posts
    const POSTS_URL = `https://65a096c3600f49256fb0123d.mockapi.io/api/v1/Posts`
    let { id: UserId } = useParams();
    let user = ProfileComp(UserId); 
    let myId = Math.floor(id);

    const [open, setOpen] = useState(false);
    //sets state fpr editing input field
    const [updatedPostId, setUpdatedPostId] = useState("");
    // sets state for PostId to be accessible for discerning which post the editing input field opens for
    const [updatedContent, setUpdatedContent] = useState("");
    //sets the state with the updated content,to be accessible for the UpdatePost function, and for filling the 
    //input field automatically upon opening
    console.log("Posts:content", updatedContent);
    

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
        .then(getPosts);
    }
    //a typical fetch update CRUD that ends with triggering the Open state and 
    //triggering the getPosts function that is passed through props

    const deletePost = (id) => {
        console.log('DeletePost is getting triggered')
      fetch(`${POSTS_URL}/${id}`, {
        method: 'DELETE'
      }).then(getPosts)
    }

    return (
        <Container>
            {posts.length > 0 && posts.map((post, index) => {
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
                //destructuring the post from posts ahead of the return while mapping the posts array
                if (ProfileId === UserId) {
                    //checking to see if the id of the author of the post is the same as the profile that called it
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
                            {open === true && updatedPostId === id ?
                            //checking the setState of open and making sure only the post that is being edited opens it's editing input field
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
            } 
        })}
        </Container> 
    )} 

export default Posts;
