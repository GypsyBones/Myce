/*posts = [
    {
        "username": "",
        "content": "",
        "images": ["",],
        "timestamp": "",
        "location": "",
        "likes": "",
        "shares": "", 
        "comments": [
            {
                "ProfileId": "",
                "Comment": "",
                "timestamp": ""
            },
        ],
        "id": "",
        "ProfileId": ""
    }
]
*/
const Posts = [
    {
        "content": "Just witnessed the most beautiful sunset at the beach. Nature never ceases to amaze me. 🌅 #sunset #beachlife",
        "images": ["https://images.unsplash.com/photo-1494548162494-384bba4ab999?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",],
        "timestamp": "2024-09-01T18:45:00",
        "location": "Beach",
        "likes": 120,
        "shares": 25,
        "comments": [
            {
                "ProfileId": "19",
                "comment": "Sunsets by the beach are truly magical!",
                "timestamp": "2024-09-01T19:00:00"
            },
            {
                "ProfileId": "21",
                "comment": "I love watching the sun dip below the horizon. It's a moment of pure bliss.",
                "timestamp": "2024-09-01T19:30:00"
            }
        ],
        "id": "1",
        "ProfileId": "1"
    },
    {
        "content": "Spent the day hiking through the forest trails. There's something so rejuvenating about being surrounded by trees and wildlife. 🌲🌿 #nature #hiking",
        "images": ["https://images.unsplash.com/photo-1700226161339-adee8617fc47?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",],
        "timestamp": "2024-09-05T15:20:00",
        "location": "Forest",
        "likes": 90,
        "shares": 15,
        "comments": [
            {
                "ProfileId": "23",
                "comment": "I always feel so alive when I'm in the forest. It's like a whole other world.",
                "timestamp": "2024-09-05T15:45:00"
            },
            {
                "ProfileId": "25",
                "comment": "Nature is the best healer. Glad you had a great time!",
                "timestamp": "2024-09-05T16:00:00"
            }
        ],
        "id": "2",
        "ProfileId": "1"
    },
    {
        "content": "Visited a local farmer's market today and picked up some fresh produce. Supporting local farmers feels so rewarding. 🍎🥕 #farmersmarket #supportlocal",
        "images": ["https://images.unsplash.com/photo-1526399743290-f73cb4022f48?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",],
        "timestamp": "2024-09-10T11:35:00",
        "location": "Farmers Market",
        "likes": 150,
        "shares": 30,
        "comments": [
            {
                "ProfileId": "27",
                "comment": "There's nothing like the taste of fresh, locally grown fruits and vegetables!",
                "timestamp": "2024-09-10T12:00:00"
            },
            {
                "ProfileId": "29",
                "comment": "Thank you for supporting us! It means a lot to our community.",
                "timestamp": "2024-09-10T12:30:00"
            }
        ],
        "id": "3",
        "ProfileId": "1"
    },
    {
        "content": "Just finished reading an amazing book by the lake. There's something so peaceful about reading surrounded by nature. 📚🌳 #reading #peaceful",
        "images": ["https://plus.unsplash.com/premium_photo-1664910483856-d226c44351c3?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",],
        "timestamp": "2024-09-15T17:10:00",
        "location": "Lake",
        "likes": 80,
        "shares": 10,
        "comments": [
            {
                "ProfileId": "30",
                "comment": "Reading by the lake sounds like a dream!",
                "timestamp": "2024-09-15T17:30:00"
            },
            {
                "ProfileId": "28",
                "comment": "Nature provides the perfect backdrop for a good book.",
                "timestamp": "2024-09-15T18:00:00"
            }
        ],
        "id": "4",
        "ProfileId": "1"
    },
    {
        "content": "Volunteered at a local beach cleanup today. It's inspiring to see so many people coming together to protect our oceans and coastline. 🌊♻️ #beachcleanup #volunteer",
        "images": [],
        "timestamp": "2024-09-20T09:45:00",
        "location": "Beach",
        "likes": 200,
        "shares": 40,
        "comments": [
            {
                "ProfileId": "26",
                "comment": "Thank you for your dedication to keeping our beaches clean!",
                "timestamp": "2024-09-20T10:00:00"
            },
            {
                "ProfileId": "24",
                "comment": "Wish I could've joined! Keep up the great work.",
                "timestamp": "2024-09-20T10:30:00"
            }
        ],
        "id": "5",
        "ProfileId": "1"
    },
    {
        "content": "Just enjoyed a beautiful sunset at the beach! 🌅 #nature #sunset",
        "images": ["https://images.unsplash.com/photo-1616036740257-9449ea1f6605?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",],
        "timestamp": "2024-02-19T18:00:00Z",
        "location": "Beach",
        "likes": 120,
        "shares": 45,
        "comments": [
            {
                "ProfileId": "22",
                "comment": "Looks stunning!",
                "timestamp": "2024-02-19T18:15:00Z"
            },
            {
                "ProfileId": "20",
                "comment": "Wish I could be there! Coulda brought these chairs I just made!",
                "timestamp": "2024-02-19T18:30:00Z"
            }
        ],
        "id": "6",
        "ProfileId": "24"
    },
    {
        "content": "Excited to announce the launch of our new website! Check it out: [link]",
        "images": [],
        "timestamp": "2024-02-19T12:00:00Z",
        "location": "",
        "likes": 350,
        "shares": 120,
        "comments": [
            {
                "ProfileId": "18",
                "comment": "Great job on the website design!",
                "timestamp": "2024-02-19T12:30:00Z"
            },
            {
                "ProfileId": "16",
                "comment": "Thanks dad.",
                "timestamp": "2024-02-19T12:38:00Z"
            }
        ],
        "id": "7",
        "ProfileId": "12"
    },
    {
        "content": "Visited an amazing art exhibition today! 🎨 #art #inspiration",
        "images": ["https://images.unsplash.com/photo-1622216107686-dcc90f306dcd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",],
        "timestamp": "2024-02-19T15:00:00Z",
        "location": "Art Gallery",
        "likes": 200,
        "shares": 65,
        "comments": [
            {
                "ProfileId": "14",
                "comment": "Which artist's work did you see?",
                "timestamp": "2024-02-19T15:30:00Z"
            },
            {
                "ProfileId": "12",
                "comment": "Looks like a fantastic exhibit!",
                "timestamp": "2024-02-19T15:45:00Z"
            },
            {
                "ProfileId": "10",
                "comment": "Wish I could have joined you!",
                "timestamp": "2024-02-19T16:00:00Z"
            }
        ],
        "id": "8",
        "ProfileId": "31"
    },
    {
        "content": "Celebrating my birthday today! 🎉🎂",
        "images": ["https://plus.unsplash.com/premium_photo-1661741248837-7c065ebf0081?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",],
        "timestamp": "2024-02-19T08:00:00Z",
        "location": "",
        "likes": 500,
        "shares": 80,
        "comments": [],
        "id": "9",
        "ProfileId": "8"
    },
    {
        "content": "Just finished reading an amazing book! Highly recommend it.",
        "images": ["https://images.pangobooks.com/images/8507743e-1937-44a2-b5c7-4b4a3d38e9a1?width=800&quality=85&crop=1%3A1",],
        "timestamp": "2024-02-19T20:00:00Z",
        "location": "",
        "likes": 150,
        "shares": 30,
        "comments": [
            {
                "ProfileId": "8",
                "comment": "What book was it?",
                "timestamp": "2024-02-19T20:15:00Z"
            }
        ],
        "id": "10",
        "ProfileId": "19"
    },
    {
        "content": "Had a great time at the concert last night! 🎶 #edm #music #fun",
        "images": [
            "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1491210953611-dcd4c66e0840?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            "https://images.unsplash.com/photo-1495837174058-628aafc7d610?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        "timestamp": "2024-02-18T23:00:00Z",
        "location": "Concert Hall",
        "likes": 280,
        "shares": 50,
        "comments": [
            {
                "ProfileId": "6",
                "comment": "Who was performing?",
                "timestamp": "2024-02-19T00:15:00Z"
            },
            {
                "ProfileId": "4",
                "comment": "Looks like it was a blast!",
                "timestamp": "2024-02-19T01:00:00Z"
            }
        ],
        "id": "11",
        "ProfileId": "28"
    },
    {
        "content": "Enjoying a quiet evening at home with a good book and some tea. #cozy",
        "images": ["https://images.unsplash.com/photo-1414124488080-0188dcbb8834?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        "timestamp": "2024-02-19T21:00:00Z",
        "location": "",
        "likes": 180,
        "shares": 20,
        "comments": [
            {
                "ProfileId": "2",
                "comment": "Sounds like a perfect evening!",
                "timestamp": "2024-02-19T21:30:00Z"
            }
        ],
        "id": "12",
        "ProfileId": "2"
    },
    {
        "content": "Just finished a challenging workout session at the gym 💪 #fitness",
        "images": ["https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        "timestamp": "2024-02-19T17:00:00Z",
        "location": "Gym",
        "likes": 250,
        "shares": 40,
        "comments": [
            {
                "ProfileId": "31",
                "comment": "Keep up the good work!",
                "timestamp": "2024-02-19T17:30:00Z"
            }
        ],
        "id": "13",
        "ProfileId": "29"
    },
    {
        "content": "Exploring the great outdoors on a hiking adventure! #nature",
        "images": ["https://images.unsplash.com/photo-1612139829163-9e760393e696?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        "timestamp": "2024-02-19T10:00:00Z",
        "location": "Hiking Trail",
        "likes": 300,
        "shares": 60,
        "comments": [
            {
                "ProfileId": "18",
                "comment": "Which trail are you on?",
                "timestamp": "2024-02-19T10:30:00Z"
            },
            {
                "ProfileId": "16",
                "comment": "Looks like a beautiful day for a hike!",
                "timestamp": "2024-02-19T11:00:00Z"
            }
        ],
        "id": "14",
        "ProfileId": "11"
    },
    {
        "content": "Spent the day volunteering at the local shelter. Look at this absolute cutie patootie! #givingback",
        "images": ["https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        "timestamp": "2024-02-19T13:00:00Z",
        "location": "Local Shelter",
        "likes": 400,
        "shares": 75,
        "comments": [
            {
                "ProfileId": "14",
                "comment": "What an adorable helper!",
                "timestamp": "2024-02-19T13:30:00Z"
            },
            {
                "ProfileId": "33",
                "comment": "You're making a difference!",
                "timestamp": "2024-02-19T14:00:00Z"
            },
            {
                "ProfileId": "17",
                "comment": "So proud of you!",
                "timestamp": "2024-02-19T14:30:00Z"
            }
        ], 
        "id": "15",
        "ProfileId": "3"
    }
]
