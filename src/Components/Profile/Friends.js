import { React, useState, useEffect } from "react";
import { Card, Row, Carousel, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import defaultUserPic from '../../Icons/icons8-user-default-50.png';
import { useParams } from "react-router-dom";
import Debug from "../Other/Debug";

const Friends = (props) => {
    const { id: id } = useParams();
    //used to remove the profile's info from the friends list
    let limitNum = Math.floor(props.props);
    //Math.floor to take it from a string to an integer
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
        <div className="friends-post-content">
            {user.length > 0 && user.map((user, index) => {
                if (`${user.id}` != id && index <= limitNum) {
                    return (
                        <Link key={user.id} to={`/profile/${user.id}`}>
                            <img className="friend-profile profilePicMd profilePic" onClick={goToProfile} key={user.id} src={user.avatar || defaultUserPic} width={100}/>
                        </Link>
                    )}
            })}
        </div>
    )
};

//maps thru all the users, only return if the user.id is not the same as the profileId, which is grabbed from the browser
//also limits the amount that are rendered through the limitNum variable, determined by props sent in from where it's called
//the limitNum is dynamic (via props) for future use in seeing 'all' friends when that page is made


export default Friends;