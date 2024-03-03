import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap';
import './Profile.css'
import Debug from "../Other/Debug.js";


import ProfileComp from '../Profile/profileComp.js';
import Friends from '../Profile/Friends.js';
import defaultUserPic from '../../Icons/icons8-user-default-50.png';
import Posts from "../Profile/Posts.js";
import submit from '../../Icons/icons8-right-button-50.png';


const Profile = (props) => {
  const { id: browserId } = useParams();
  const user = ProfileComp(browserId);
  const userId = props.props
  console.log(userId, browserId)
//id differentiation between browser and props for post creation ability only on own profile page

  return (
    <Container fluid="lg" className="container">
      <Row className="header show-grid">
          <img className="headerImg" src={user.header} />
      </Row>
      <Row className="row-name">
        <Col md="2">
            <img 
              className="profilePicLg profilePic" 
              src={user.avatar || defaultUserPic} />
        </Col>
        <Col md="4" className="profileName">
          <p className="title2">{user.name}</p>
          <p className="title4">{user.username}</p>
        </Col>
        <Col className="profile-stats">
          <Row className="profile-stats-row">
            <Col md="3">  
                <p className="stat">13                 <span>Projects</span></p>
            </Col>
            <Col md="3">
              <p className="stat">2                  <span>Following</span></p>
            </Col>
            <Col md="3">
              <p className="stat">{user.followers}   <span>Followers</span></p>
            </Col>
            <Col md="1">
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row className="profile-body">
        <Col md="3" >
          <Row>
            <Col className="side-panel">
              <Row className="card-row">
                <Card className="friends-card"> 
                  <Card.Header className="post-username">Bio:</Card.Header>
                    <Card.Body className="friends-card-body">
                      <p className="post-content">{user.bio}</p>
                    </Card.Body>
                  </Card>
              </Row>
              <Row className="card-row">
                <Card className="friends-card">
                  <Card.Header className="post-username">Friends:</Card.Header>
                  <Card.Body className="friends-card-body">
                    <Friends props="16"/>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col  md="6" className="profile-post-area">
          <Row>
            <Col >
              <div className="container post-cards">
                {userId===browserId?
                  <Card className="post-input">
                    <Card.Body className="post-username">
                      <Row className="post-header new-post-header">
                        <Col md="1">
                            <img className="profilePicSm" src={user.avatar} />
                        </Col>
                        <Col md="9">
                          <Form>
                            <Form.Group controlId="new-post">
                              <Form.Control 
                                className="new-post-input" 
                                type="text" 
                                placeholder={`A Penny for your thoughts, ${user.name}?`}>
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col md="2">
                          <Button className="new-post-submit-btn trans-btn" type="submit">
                            <img className="new-post-submit-img" src={submit}/>
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                :<div></div>}
              </div>
              <Posts props={browserId}/>              
            </Col>
          </Row>
        </Col>
        <Col xs="3" className="right-side-panel">
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;


// <Row>
// <Col>
//   <Button type="add-a-picture"> + Photo</Button>
// </Col>
// <Col>
//   <Button type="submit">Submit</Button>
// </Col>

// </Row>

// {posts.length > 0 && posts.map((post) => 
//   <Post key={post.id} post={post} />
//   )}