My Final Project for Coding Bootcamp.

This Application is a culmination of a variety of interests, primarily surrounding Community, Support, Connection, and the Sharing of resources and knowledge. 

The requirements for this assignment were:
- At least 3 pages
    - (of which I have overexceeded)
- 10 components (which are as follows)
    - Navbar
        - Button.js (component that handles the button for login/signup)
        - Dropdown.js (component that handles the dropdown)
        - MenuItem.js (objects for the dropdown menu)
        - Nav.js (component all the brunt work of the navigation)
    - Other
        - Debug.js (Custom Hook that helps with debugging and sending props to the console in a legible manner (actually abit proud of this one))
        - Footer.js (currently not being used)
        - TimeStamp.js (Custom Hook that helps to transform an ISO8601 to legible time format)
    - Profile
        - Friends.js (component that maps and renders all users(friends))
        - Posts.js (component that renders posts via the API info)
        - profileComp.js (Custom Hook that takes an id and pulls information from API and returns that information to be used where it's called)
        - projects.js (not currently being used)
        - Comments.js (component that renders comments)
        -ProfileFeed.js (component that renders the posts and new-post in feed)
    - Market
        - ProductsList.js (Component that renders Products list from API)
- CRUD operations
    - On Profile (in dropdown menu), we have the following operations
        - Create - You can Create a post, as well as a Comment, which is the PUT
        - READ - All of the information you are presented with is through
        - UPDATE - you can update your post 
        - DELETE - you can delete a Post, as well as a Comment, which is the Delete 
