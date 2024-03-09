import { React } from "react";
import { Container, Card, Row, Col } from 'react-bootstrap';
import FriendsPageList from "../Profile/FriendsPageList.js";
import ProfileComp from "../Profile/profileComp";
import defaultUserPic from '../../Icons/icons8-user-default-50.png';

const Friends = (props) => {
  const myId = Math.floor(props.props)
  const profile = ProfileComp(myId)

  console.log("friends", props)
  //this page just has a generic card that fits all the friends' profiles on it
  //TODO allow for the parameters to change when clicked from a different profile
  //maybe do that from the Routing in app.js
  
    return (
      <Container fluid="lg" className="container">
        <Row className="header show-grid">
            <img className="headerImg" src={profile.header} />
        </Row>
        <Row className="row-name">
          <Col md="2">
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
        <Row>
          <Col md="1">
          </Col>
          <Col md="10">
            <FriendsPageList profile={profile} limit='35'/>
          </Col>
          <Col md="1">
          </Col>
          
        </Row>
      </Container>
    );
  };
  
  export default Friends;