import { React, useState, useEffect } from "react";
import { Card, Row, Carousel, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import defaultUserPic from '../../Icons/icons8-user-default-50.png';

const Friends = () => {
    const API_URL = "https://65a096c3600f49256fb0123d.mockapi.io/api/v1/Profiles";
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    const goToProfile = () => setProfile(true);

    useEffect(() => {
        const fetchItems = () => {
            fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setUser(data); 
         })};
//TODO when click on friend link, refreshes page contents with new content
        fetchItems();
    }, []);

    return (
        <div>
            {user.length > 0 && user.map((user) => 
                <Link key={user.id} to={`/profile/${user.id}`}>
                    <img className="profilePicMd profilePic" onClick={goToProfile} key={user.id} src={user.avatar || defaultUserPic} width={100}/>
                </Link>
            )}
        </div>
    )
};

export default Friends;