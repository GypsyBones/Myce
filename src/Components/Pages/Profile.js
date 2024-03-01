import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Card } from 'react-bootstrap';
import './Profile.css'


import ProfileComp from '../Profile/profileComp.js';
import Friends from '../Profile/Friends.js';
import defaultUserPic from '../../Icons/icons8-user-default-50.png';
import Posts from "../Profile/Posts.js";



const Profile = () => {
  const { id: id } = useParams();
  const user = ProfileComp(id);
//TODO widths/spacing is not rendering right! hard-code breakpoints and sizing
  return (
    <Container fluid="lg" className="container">
      <Row className="header show-grid">
          <img className="headerImg" src={user.header} />
      </Row>
      <Row className="row-name">
        <Col md="2">
            <img className="profilePicLg profilePic" src={user.avatar || defaultUserPic}></img>
        </Col>
        <Col md="4" className="profileName">
          <h2>{user.name}</h2>
          <h6>{user.username}</h6>
        </Col>
        <Col md="4" className="profile-stats">
          <ul>  
            <li>13                 <span>Projects</span></li>
            <li>2                  <span>Following</span></li>
            <li>{user.followers}   <span>Followers</span></li>
          </ul>
        </Col>
      </Row>
      <hr />
      <Row className="profile-body">
        <Col md="3" >
          <Row>
            <Col className="side-panel">
              <Row>
                <Card className="friends-card">
                  <Card.Header>Friends:</Card.Header>
                  <Card.Body>
                    <Friends />
                  </Card.Body>
                </Card>
                
              </Row>
              <Row>
                <p>Bio:</p>
                <p>{user.bio}</p>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col  xs="6" className="profile-post-area">
          <Posts props={id}/>
        </Col>
        <Col xs="3" className="right-side-panel">
        </Col>
        
      </Row>
    </Container>
  );
};

export default Profile;

// {posts.length > 0 && posts.map((post) => 
//   <Post key={post.id} post={post} />
//   )}