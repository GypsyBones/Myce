import { React } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Card, Form, Button } from 'react-bootstrap';
import Debug from "../Other/Debug.js";


import ProfileComp from '../Profile/profileComp.js';
import defaultUserPic from '../../Icons/icons8-user-default-50.png';
import Posts from "../Profile/Posts.js";
import submit from '../../Icons/icons8-right-button-50.png';


const ProfileFeed =(props) => {
  const { id: browserId } = useParams();
  const user = ProfileComp(browserId);
  const userId = props.props

  Debug("ProfileFeed", browserId)

    return(
        <Row>
            <Col >
              <div className="container post-cards">
                {userId===browserId?
                  <Card className="post-input">
                    <Card.Body className="post-username">
                      <Row className="post-header new-post-header">
                        <Col md="1">
                            <img className="profilePicSm" src={user.avatar || defaultUserPic} alt={`profile${user.name}`}/>
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
                            <img className="new-post-submit-img" src={submit} alt="submit"/>
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
    );
};

export default ProfileFeed;