import React from "react";

function Debug (location, props1, props2) {
    let myObj1 = JSON.stringify(props1)
    let myObj2 = JSON.stringify(props2)
    let message = `${location} recieved this: ${myObj1}, ${myObj2}`
    console.dir(message)
};

export default Debug;