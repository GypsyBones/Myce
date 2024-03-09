import { React } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import HomeFeed from '../Profile/HomeFeed.js';
import ProfileComp from '../Profile/profileComp.js';

const Home = (props) => {
  let myId = Math.floor(props.props);
  let profile = ProfileComp(myId);
  console.log("Home:myId + profile", myId, profile);

  return (
    <Container fluid="lg" className="container home-container">
      <Row className="header-image">
      </Row>
      <Row>
        <Col md="3">
        <p> HELLO </p>
        </Col>
        <Col>
          <HomeFeed profile={profile} id={myId}/>
        </Col>
        <Col md="3">
        </Col>
      </Row>
    </Container>
  );
};

export default Home;