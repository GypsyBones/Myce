


function Debug (location, props1, props2) {
    let myObj1 = JSON.stringify(props1)
    let myObj2 = JSON.stringify(props2)
    if (myObj1 !== undefined && myObj2 !== undefined) {
        let message = `${location} recieved this: ${myObj1}, ${myObj2}`
        console.dir(message)
    } else if (myObj2 === undefined) {
        let message = `${location} recieved this: ${myObj1}`
        console.dir(message)
    } else {
        console.dir('error')
    }
    
};

export default Debug;