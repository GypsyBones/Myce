import React from "react";

function Debug (location, props) {
    let myObj = JSON.stringify(props)
    let message = `${location} recieved this: ${myObj}`
    console.dir(message)
};

export default Debug;