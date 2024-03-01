import { React, useState } from "react";

//Statuses: Potential, Planning, In Progress, Delayed, Completed



const Projects = () => {
    const API_URL = "https://65a096c3600f49256fb0123d.mockapi.io/api/v1/Profiles/1/Projects";

    const [project, setProject] = useState();

    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            setProject(data);
        })
    }, []);

    const {
        id,
        ProfileId,
        createdAt, 
        name,
        picture,
        startDate,
        endDate,
        status,
        team,
        description,
    } = project;
}

export default Projects;