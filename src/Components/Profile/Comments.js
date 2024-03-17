//import { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { React, } from "react";

import profileComp from './profileComp';
import TimeStamp from '../Other/TimeStamp.js';
import defaultUserPic from '../../Icons/icons8-user-default-50.png';
import dots from '../../Icons/icons8-dots-50.png';
import submit from '../../Icons/icons8-right-button-50.png';


function Comments(props) { 
    const limitNum = Math.floor(props.limit);
    const myId = Math.floor(props.id);
    const user = profileComp(myId);
    const comments = props.post.comments
    //limitNum is a prop that sets the limit of how many comments are visible, and is dymnamic for future use
    //when I decide to have macro view, which allow syou to see all the information on the post


    return (
        <div className="comments"> 
            <hr className="hr-comment"/>
            {comments.length > 0 && comments.map((comment, index) => {
                const {
                    id,
                    ProfileId,
                    content,
                    timestamp
                } = comment;
                const profile = profileComp(ProfileId)
                //maps through the array of comments, pulls the id of the profile out and passes it through 
                //the profile component that returns the profile data in the variable 'profile'.
                if (index <= limitNum) {
                return(
                <div key={`${props.id}:${id}`}>
                    <Row className="comment-header">
                        <Col className='no-pad' md="2">
                            <Button href={`/profile/${profile.id}`} className="trans-btn">
                                <img className="profilePicSm" src={profile.avatar || defaultUserPic} alt={`profile${profile.name}`}/>
                            </Button>
                        </Col>
                        <Col className='no-pad' md="5">
                            <Link to={`/profile/${profile.id}`} className="post-username">{profile.username}</Link>
                        </Col>
                        <Col className='no-pad' md="3">
                            <span className="timestamp">{TimeStamp(timestamp)}</span>
                        </Col>
                        <Col className='no-pad' md="1">
                            <button className="trans-btn"><img className="post-dots" src={dots} alt="menu dots"/></button>
                        </Col>
                    </Row>
                    <Row>
                        <p className='comment-content'>{content}</p>
                    </Row>
                    <Row>
                        <span>

                        </span>
                    </Row>
                    <br/>
                </div>
                )} else {
                    return (
                        <div></div>
                    )
                }
            })}
            <Row className="post-header new-post-header new-comment">
                <Col md="1">
                    <img className="profilePicSm" src={user.avatar} alt={`profile${user.name}`}/>
                </Col>
                <Col md="9">
                    <Form>
                        <Form.Group controlId="new-post">
                            <Form.Control 
                                className="new-post-input" 
                                type="text" 
                                placeholder="Comment">
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md="2">
                    <Button 
                        className="new-post-submit-btn trans-btn" 
                        type="submit">
                            <img className="new-post-submit-img" src={submit} alt="submit"/>
                    </Button>
                </Col>
            </Row>
        </div>
  );
}

export default Comments;
