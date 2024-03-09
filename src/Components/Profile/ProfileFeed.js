import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Card, Form, Button } from 'react-bootstrap';


import ProfileComp from '../Profile/profileComp.js';
import Posts from "../Profile/Posts.js";
import Debug from "../Other/Debug.js";

import submit from '../../Icons/icons8-right-button-50.png';
import defaultUserPic from '../../Icons/icons8-user-default-50.png';


const ProfileFeed = (props) => {
  const { id } = useParams();
  //get the id data from the browser
  const browserId = Math.floor(id)
  //turns that id into a whole integer
  const user = ProfileComp(browserId);
  //passes the integer id through to profile component that returns profile data
  let myId = Math.floor(props.id.props)
  //THE user id turned to a whole integer
  console.log("profilefeed:", myId)
  const POSTS_URL = `https://65a096c3600f49256fb0123d.mockapi.io/api/v1/Posts`
  
  const [ posts, setPosts ] = useState([]);
  // sets the state of the array of posts
  const [updatePosts, setUpdatePosts] = useState(false);
  const [content, setContent] = useState("")
  //set content triggered by editing
  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const getPosts = () => {
    fetch(POSTS_URL)
    .then(data => data.json())
    .then(data => setPosts(data.reverse()))
    .then(setUpdatePosts(false))
    .then(console.log("getPosts triggered"))
  }

  useEffect(() => {
    getPosts()
  }, [browserId, updatePosts])

  function handleSubmit(){
    const d = new Date();
    const date = d.toISOString();
    let di = user.id;
    const id = di.toString();
    Debug("ProfileFeed:handleSubmit:id", id)

    fetch(POSTS_URL, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
      content: content,
      images: [""],
      timestamp: date,
      location: user.location,
      likes: 0,
      superLikes: 0, 
      comments: [],
      ProfileId: id
    })
    }).then(() => getPosts())
    .then(setContent(""))}
    //submission of new post: creates variables for reference, posts the data through fetch, 
    //triggers getPost function, then sets the content back to an empty string

    return (
        <Row>
            <Col >
            {myId === browserId ? 
              <div className="container post-cards">
                  <Card className="post-input">
                    <Card.Body className="post-username">
                      <Row className="post-header new-post-header">
                        <Col md="1">
                            <img className="profilePicSm" src={user.avatar || defaultUserPic} alt={`profile${user.id}`}/>
                        </Col>
                        <Col md="9">
                          <Form>
                            <Form.Group>
                              <Form.Control 
                                className="new-post-input" 
                                id="newPostInput"
                                type="text" 
                                value={content}
                                onChange={handleContent}
                                placeholder={`A Penny for your thoughts, ${user.name}?`}>
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col md="2">
                          <Button className="new-post-submit-btn trans-btn" type="submit" onClick={handleSubmit}>
                            <img className="new-post-submit-img" src={submit} alt="submit"/>
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
              </div>
              : <div></div>}
              <Posts profile={props.profile} id={myId} posts={posts} getPosts={getPosts} />              
            </Col>
          </Row>
    );
};

export default ProfileFeed;
