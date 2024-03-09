import { React } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Card } from 'react-bootstrap';
import './Profile.css'


import profileComp from '../Profile/profileComp.js';
import Friends from '../Profile/FriendsList.js';
import ProfileFeed from '../Profile/ProfileFeed.js'

import defaultUserPic from '../../Icons/icons8-user-default-50.png';


const Profile = (props) => {
  const { id: id } = useParams();
  const userId = Math.floor(id)
  let profile = profileComp(userId)
  console.log(userId)
  let myId = props

  return (
    <Container fluid="lg" className="container">
      <Row className="header show-grid">
          <img className="headerImg" src={profile.header} />
      </Row>
      <Row className="row-name">
        <Col md="2" className="profile-pic-container">
            <img 
              className="profilePicLg profilePic" 
              src={profile.avatar || defaultUserPic} />
        </Col>
        <Col md="4" className="profileName">
          <p className="title2">{profile.name}</p>
          <p className="title4">{profile.username}</p>
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
              <p className="stat">{profile.followers}   <span>Followers</span></p>
            </Col>
            <Col md="1">
            </Col>
          </Row>
        </Col>
      </Row>
      <hr className="hr-profile"/>
      <Row className="profile-body">
        <Col md="3" >
          <Row>
            <Col className="side-panel">
              <Row className="card-row">
                <Card className="friends-card"> 
                  <Card.Header className="post-profilename">Bio:</Card.Header>
                    <Card.Body className="friends-card-body">
                      <p className="post-content">{profile.bio}</p>
                    </Card.Body>
                  </Card>
              </Row>
              <Row className="card-row">
                <Card className="friends-card">
                  <Card.Header className="post-profilename">Friends:</Card.Header>
                  <Card.Body className="friends-card-body">
                    <Friends profile={profile} id={myId} limit='15'/>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col  md="6" className="profile-post-area">
          <ProfileFeed profile={profile} id={myId}/>
        </Col>
        <Col xs="3" className="right-side-panel">
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;

//change = {handleProfile(friendId)}

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