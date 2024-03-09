import { useState, useEffect } from "react";
//import Debug from '../Other/Debug.js';

function ProfileComp(id) {
    //const { id: id } = useParams() 
    //takes id from browser and attributes it to the variable
    const API_URL = `https://65a096c3600f49256fb0123d.mockapi.io/api/v1/Profiles/${id}`; 
    //grabs information about user from the mockapi using the variable
    const [ user, setUser ] = useState([]);
    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            setUser(data);
        })
    }, []);
    //sets the data from the api as the user
    
    const { 
        username,
        name, 
        bio, 
        avatar, 
        header, 
        age, 
        location, 
        followers, 
        contactInfo, 
        joinDate, 
        verified, 
        posts
    } = user;
    //destructures data to make it accessible to code

    return {
        id,
        username,
        name, 
        bio, 
        avatar, 
        header, 
        age, 
        location, 
        followers, 
        contactInfo, 
        joinDate, 
        verified, 
        posts
    }
};

export default ProfileComp;