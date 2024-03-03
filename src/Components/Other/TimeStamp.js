import React from "react";
import Debug from "./Debug";

function TimeStamp (timestamp) {
    let date1 = Date.parse(timestamp);
    let date2 = new Date(date1);
    let date3 = date2.toLocaleDateString();
    return(date3);
};

export default TimeStamp;