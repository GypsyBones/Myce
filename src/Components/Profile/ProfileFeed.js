import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Card, Form, Button } from 'react-bootstrap';
import { toast } from "react-toastify";
import axios from "axios";


import ProfileComp from '../Profile/profileComp.js';
import Posts from "../Profile/Posts.js";
import Debug from "../Other/Debug.js";

import submit from '../../Icons/icons8-right-button-50.png';
import defaultUserPic from '../../Icons/icons8-user-default-50.png';


const ProfileFeed = (props) => {
  const { id: id } = useParams();
  const browserId = Math.floor(id)
  const user = ProfileComp(browserId);
  let myId = Math.floor(props.id.props)

  const POSTS_URL = `https://65a096c3600f49256fb0123d.mockapi.io/api/v1/Posts`
  
  const [ posts, setPosts ] = useState([{
    "username": "",
    "content": "",
    "images": [""],
    "timestamp": "",
    "location": "",
    "likes": "",
    "superLikes": "", 
    "comments": [
        {
            "ProfileId": "",
            "content": "",
            "timestamp": ""
        },
    ],
    "id": "",
    "ProfileId": ""
  }]);

  const [updatePosts, setUpdatePosts] = useState(false);
  const [content, setContent] = useState("")

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data = [] } = await axios.get(POSTS_URL);
        setPosts(data.reverse());
        setUpdatePosts(false);
        setContent();
      } catch (error) {
        console.log({ error});
      }
    };
    getPosts();
    }, [browserId, updatePosts]);

  const handleSubmit = async() => {
    const d = new Date();
    const date = d.toISOString()
    let di = user.id
    const id = di.toString()

    const post = {
      "content": content,
      "images": [""],
      "timestamp": date,
      "location": user.location,
      "likes": 0,
      "superLikes": 0, 
      "comments": [],
      "ProfileId": id
    };
    axios.post(POSTS_URL, post).then((res) => {
      console.log(res.status, res.data.token);
    });
  };

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
              <Posts profile={props.profile} id={myId} posts={posts} />              
            </Col>
          </Row>
    );
};

export default ProfileFeed;


// async function postJSON(data) {
//   const d = newDate();
//   const date = d.toISOString()

//   fetch(POSTS_URL, {
//       method: "POST",
//       body: JSON.stringify({
//           "content": "",
//           "images": [""],
//           "timestamp": date,
//           "location": user.location,
//           "likes": 0,
//           "superLikes": 0, 
//           "comments": [
//               {},
//           ],
//           "ProfileId": user.id
//       }),
//       headers: {
//           "Content-type": "application/json; charset=UTF-8"
//       }
//   })
//   .then((res) => res.json())
//   .then((data) => {
//       setPosts(data);
//   })
// }