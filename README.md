My Final Project for Coding Bootcamp.

This Application is a culmination of a variety of interests, primarily surrounding Community, Support, Connection, and the Sharing of resources and knowledge. 

The requirements for this assignment were:
- At least 3 pages
    - I have many pages that are routed, but only the following three are interactable
        - Home
        - Profile (and sub-profiles (32))
        - Friends (accessible through Profiles)
- 10 components (which are as follows)
    - Navbar
        - Button.js (Component that handles the button for login/signup)
        - Dropdown.js (Component that handles the dropdown)
        - MenuItem.js (objects for the dropdown menu)
        - Nav.js (Component all the brunt work of the navigation)
    - Other
        - Debug.js (Custom Hook that helps with debugging and sending props to the console in a legible manner (actually abit proud of this one))
        - Footer.js (currently not being used)
        - TimeStamp.js (Custom Hook that helps to transform an ISO8601 to legible time format)
    - Profile
        - FriendsList.js (Component that maps and renders all users(friends))
        - Posts.js (Component that renders posts via the API info)
        - profileComp.js (Custom Hook that takes an id and pulls information from API and returns that information to be used where it's called)
        - projects.js (not currently being used)
        - Comments.js (Component that renders comments)
        - ProfileFeed.js (Component that renders the posts in feed)
        - HomeFeed.js (Component that renders all posts in the Home Page)
        - HomePosts.js (Component that renders every post (still some bugs to fix in this one))
        - FriendsPageList.js (Component that renders all friends)
    - Market
        - ProductsList.js (Component that renders Products list from API, not currently in use)
- CRUD operations
    - On Profile AND Home (in dropdown menu), we have the following operations
        - Create - You can Create a post
        - READ - All of the information you are presented with is through
        - UPDATE - you can update your post 
        - DELETE - you can delete a Post


Mentor Meet
- changing state from within a child to a parent
    - to grandparent??
    - might need for put/post but also FRIENDS (click on friend, new page doesn't change state of Profile)
- put/post comments/posts
    - comments are an objects-array within the objects-array of posts 