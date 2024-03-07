import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';

import Debug from "../Other/Debug";
import ProfileComp from '../Profile/profileComp.js';

import defaultUserPic from '../../Icons/icons8-user-default-50.png';
import dots from '../../Icons/icons8-ellipsis-48.png';

const Friends = ( props ) => {
    const profile = props.profile
    console.log(profile)   
    
    let limitNum = 15;
    const API_URL = "https://65a096c3600f49256fb0123d.mockapi.io/api/v1/Profiles";
    const [ user, setUser ] = useState([]);

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
        <div className="friends-post-content">
            {user.length > 0 && user.map((user, index) => {
                if (Math.floor(`${user.id}`) !== profile.id && index <= limitNum) {
                    return (
                        <Button href={`./${user.id}`} className="trans-btn" key={user.id} >
                            <img 
                                className="friend-profile profilePicMd profilePic" 
                                alt={user.id} 
                                key={user.id} 
                                props={user.id} 
                                src={user.avatar || defaultUserPic} 
                                width={100} 
                                />
                        </Button>
                    )} else {
                        return (
                            <div key={user.id}></div>
                        )
                    }
            })}
            <Link to="/friends">
                <img className="friend-profile profilePicMd profilePic" alt="All Friends"src={dots} width={100} />
            </Link>
        </div>
    )
};

//maps thru all the users, only return if the user.id is not the same as the profileId, which is grabbed from the browser
//also limits the amount that are rendered through the limitNum variable, determined by props sent in from where it's called
//the limitNum is dynamic (via props) for future use in seeing 'all' friends when that page is made


export default Friends;