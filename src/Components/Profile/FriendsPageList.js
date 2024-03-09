import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Row, Col } from 'react-bootstrap';

import defaultUserPic from '../../Icons/icons8-user-default-50.png';
import dots from '../../Icons/icons8-ellipsis-48.png';
import { Collapse } from "bootstrap";

const FriendsPageList = ( props ) => {
    const profile = props.profile

    let limitNum = Math.floor(props.limit);
    const API_URL = "https://65a096c3600f49256fb0123d.mockapi.io/api/v1/Profiles";
    const [ user, setUser ] = useState([]);
    //sets the users array

    useEffect(() => {
        const fetchItems = () => {
            fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setUser(data); 
         })};
        fetchItems();
    }, []);
    //accesses all profiles for mapping below

    return (
        <Card className="friends-card">
            <Card.Header className="post-profilename"><h2>Friends:</h2></Card.Header>
            <Card.Body className="friends-card-pg-body">
            {user.length > 0 && user.sort((a,b) => a.name.localeCompare(b.name)).map((user, index) => {
                if (Math.floor(`${user.id}`) !== profile.id && index <= limitNum) {
                    return (
                            <Col md="5">
                                <Card>
                                    <Row className="friends-pg-list-row">
                                        <Col md="5" className="friends-pg-avatar">
                                            <Button href={`./profile/${user.id}`} className="trans-btn" key={user.id} >
                                                <img 
                                                    className="friend-profile profilePicLg" 
                                                    alt={user.id} 
                                                    key={user.id} 
                                                    props={user.id} 
                                                    src={user.avatar || defaultUserPic} 
                                                    width={100} 
                                                />
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Card.Header><h3>{user.name}</h3></Card.Header>
                                            <Card.Body>
                                                <p>{user.username}</p>
                                                <p>Age: {user.age}</p>
                                                <p>{user.location}</p>
                                                <p>Joined: {user.joinDate}</p>
                                                <p>Followers: {user.followers}</p>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                    )} else {
                        return (
                            <div key={user.id}></div>
                        )
                    }
            })}
            </Card.Body>
        </Card>
    )
};

//maps thru all the users, only return if the user.id is not the same as the profileId, which is grabbed from the browser
//limitNum variable is dynamically larger to account for the page. As well, some general changes in layout allow this 
//friends list to differ from the profile version

export default FriendsPageList;