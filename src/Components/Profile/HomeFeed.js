import { React, useState, useEffect } from "react";
import { Col, Row, Card, Form, Button } from 'react-bootstrap';


import ProfileComp from '../Profile/profileComp.js';
import HomePosts from "../Profile/HomePosts.js";
import Debug from "../Other/Debug.js";

import submit from '../../Icons/icons8-right-button-50.png';
import defaultUserPic from '../../Icons/icons8-user-default-50.png';


const HomeFeed = (props) => {
  let myId = Math.floor(props.id);
  const user = ProfileComp(myId);

  console.log("homefeed myId:",myId, props);
  const POSTS_URL = `https://65a096c3600f49256fb0123d.mockapi.io/api/v1/Posts`
  
  const [ posts, setPosts ] = useState([]);
    //sets the state of the posts when the getPosts function is called

  const [updatePosts, setUpdatePosts] = useState(false);
  const [content, setContent] = useState("");
    // content is set for accessibility from the editing input field and from fetch data

  const handleContent = (e) => {
    setContent(e.target.value);
  };
    //a function that takes the event and sets the content state with it's value

  const getPosts = () => {
    fetch(POSTS_URL)
    .then(data => data.json())
    .then(data => setPosts(data.reverse()))
    .then(setUpdatePosts(false))
    .then(console.log("getPosts triggered"))
  }
  //displays the array of posts

  useEffect(() => {
    getPosts()
  }, [myId, updatePosts])

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
              <HomePosts profile={user} id={myId} posts={posts} getPosts={getPosts} />              
            </Col>
          </Row>
    );
};

export default HomeFeed;
