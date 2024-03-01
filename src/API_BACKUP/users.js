const users = [
    {
        "username": "cosmic_bone_dust",
        "id": "1",
        "name": "Sylvia Bones",
        "bio": "Creative Powerhouse with 2 cats.",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/409.jpg",
        "header": "https://images.unsplash.com/photo-1524173366289-66ac92db4841?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "age": 30,
        "location": "Hibbing, Minnesota, USA",
        "followers": 942,
        "contactInfo": {
            "email": "sylviabones@example.com"
        },
        "joinDate": "2020-08-21",
        "verified": true
    },
    {
        "username": "cozy_home_1617",
        "id": "2",
        "name": "Eleanor Johnson",
        "bio": "Lover of cozy evenings and good books.",
        "avatar": "https://loremflickr.com/cache/resized/65535_53007782844_205734d5f3_n_170_170_nofilter.jpg",
        "header": "https://loremflickr.com/1024/768/https://loremflickr.com/640/480",
        "age": 55,
        "location": "Portland, Oregon, USA",
        "followers": 580,
        "contactInfo": {
            "email": "eleanor@example.com"
        },
        "joinDate": "2023-05-12",
        "verified": true
    },
    {
        "username": "adventurous_soul",
        "id": "3",
        "name": "Maxwell Rivera",
        "bio": "Seeker of adventure and new experiences.",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/522.jpg",
        "header": "https://loremflickr.com/1024/768/adventure",
        "age": 43,
        "location": "Denver, Colorado, USA",
        "followers": 720,
        "contactInfo": {
            "email": "maxwell@example.com",
            "phone": "+1 (555) 123-4567"
        },
        "joinDate": "2023-07-18",
        "verified": false
    },
    {
        "username": "WanderlustDreamer",
        "id": "4",
        "name": "Olivia Smith",
        "bio": "Exploring the world one step at a time.",
        "avatar": "https://loremflickr.com/cache/resized/65535_52383161119_77d274c96f_n_170_170_nofilter.jpg",
        "header": "https://loremflickr.com/1024/768/england",
        "age": 19,
        "location": "London, England, UK",
        "followers": 430,
        "contactInfo": {
            "email": "olivia@example.com"
        },
        "joinDate": "2023-09-30",
        "verified": true
    },
    {
        "username": "TechNinja87",
        "id": "5",
        "name": "Jackie Brown",
        "bio": "Passionate about technology and innovation.",
        "avatar": "https://loremflickr.com/cache/resized/65535_53005293219_15d9873a8a_m_170_170_nofilter.jpg",
        "header": "https://loremflickr.com/1024/768/tech",
        "age": 23,
        "location": "San Francisco, California, USA",
        "followers": 890,
        "contactInfo": {
            "email": "jackie@example.com"
        },
        "joinDate": "2023-11-15",
        "verified": false
    },
    {
        "username": "MidnightRambler",
        "id": "6",
        "name": "Sophia Martinez",
        "bio": "Dreaming big and living life to the fullest.",
        "avatar": "https://loremflickr.com/cache/resized/65535_52196159649_3a923bd268_m_170_170_nofilter.jpg",
        "header": "https://loremflickr.com/1024/768/galaxy",
        "age": 67,
        "location": "Barcelona, Spain",
        "followers": 610,
        "contactInfo": {
            "email": "sophia@example.com",
            "instagram": "@sophiamartinez"
        },
        "joinDate": "2024-01-07",
        "verified": true
    },
    {
        "username": "DreamWeaver2024",
        "id": "7",
        "name": "Liam Wilson",
        "bio": "Adventurer, explorer, and nature lover.",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/114.jpg",
        "header": "https://loremflickr.com/1024/768/forest",
        "age": 28,
        "location": "Sydney, Australia",
        "followers": 520,
        "contactInfo": {
            "email": "liam@example.com"
        },
        "joinDate": "2024-02-14",
        "verified": false
    },
    {
        "username": "AdventureSeeker99",
        "id": "9",
        "name": "Noah Lee",
        "bio": "Find me busking or hopping trains.",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/942.jpg",
        "header": "https://loremflickr.com/1024/768/influencer,food",
        "age": 33,
        "location": "Los Angeles, California, USA",
        "followers": 780,
        "contactInfo": {
            "email": "noah@example.com"
        },
        "joinDate": "2023-06-10",
        "verified": false
    },
    {
        "username": "nature_explorer_2021",
        "id": "11",
        "name": "Emma Davis",
        "bio": "Nature lover and outdoor enthusiast.",
        "avatar": "https://loremflickr.com/cache/resized/65535_49259938207_f8debf9300_m_170_170_nofilter.jpg",
        "header": "https://loremflickr.com/1024/768/hammock",
        "age": 76,
        "location": "Vancouver, British Columbia, Canada",
        "followers": 890,
        "contactInfo": {
            "email": "emma@example.com"
        },
        "joinDate": "2023-08-05",
        "verified": true
    },
    {
        "username": "web_design_guru",
        "id": "12",
        "name": "Daniel Wilson",
        "bio": "Web design and development.",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/95.jpg",
        "header": "https://loremflickr.com/1024/768/computer",
        "age": 14,
        "location": "London, England, UK",
        "followers": 670,
        "contactInfo": {
            "email": "daniel@example.com"
        },
        "joinDate": "2023-10-19",
        "verified": true
    },
    {
        "username": "StarGazer_365",
        "id": "13",
        "name": "Isabella Brown",
        "bio": "Dreamer, thinker, and creator.",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1178.jpg",
        "header": "https://loremflickr.com/1024/768/sunset,cloud",
        "age": 29,
        "location": "Paris, France",
        "followers": 550,
        "contactInfo": {
            "email": "isabella@example.com"
        },
        "joinDate": "2024-01-25",
        "verified": false
    },
    {
        "username": "SkyWatcher21",
        "id": "14",
        "name": "Ethan Garcia",
        "bio": "Tech enthusiast and aspiring entrepreneur.",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/801.jpg",
        "header": "https://loremflickr.com/1024/768/clouds",
        "age": 27,
        "location": "Austin, Texas, USA",
        "followers": 740,
        "contactInfo": {
            "email": "ethan@example.com"
        },
        "joinDate": "2024-03-02",
        "verified": true
    },
    {
        "username": "Mia Rodriguez",
        "id": "15",
        "name": "Mia Rodriguez",
        "bio": "Dreaming of travel and new adventures.",
        "avatar": "https://loremflickr.com/cache/resized/65535_52731722260_0929265b8f_n_170_170_nofilter.jpg",
        "header": "https://loremflickr.com/1024/768/campfire",
        "age": 38,
        "location": "Rome, Italy",
        "followers": 490,
        "contactInfo": {
            "email": "mia@example.com"
        },
        "joinDate": "2024-04-14",
        "verified": false
    },
    {
        "username": "James Martinez",
        "id": "16",
        "name": "James Martinez",
        "bio": "Entrepreneur, innovator, and problem solver.",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/541.jpg",
        "header": "https://loremflickr.com/1024/768/rubix-cube",
        "age": 34,
        "location": "Tokyo, Japan",
        "followers": 660,
        "contactInfo": {
            "email": "james@example.com"
        },
        "joinDate": "2024-06-28",
        "verified": true
    },
    {
        "username": "Charlotte Kim",
        "id": "17",
        "name": "Charlotte Kim",
        "bio": "Curious explorer and lifelong learner.",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg",
        "header": "https://loremflickr.com/1024/768/spyglass",
        "age": 55,
        "location": "Seoul, South Korea",
        "followers": 580,
        "contactInfo": {
            "email": "charlotte@example.com"
        },
        "joinDate": "2024-08-09",
        "verified": false
    },
    {
        "username": "art_enthusiast55",
        "id": "19",
        "name": "Elijah Wilson",
        "bio": "🎨 Art connoisseur | Gallery aficionado | Curator of creativity | Surrounded by strokes of genius | Finding beauty in every brushstroke | Collecting stories one masterpiece at a time 🖼️✨",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/846.jpg",
        "header": "https://loremflickr.com/1024/768/art",
        "age": 48,
        "location": "Berlin, Germany",
        "followers": 900,
        "contactInfo": {
            "email": "elijah@example.com"
        },
        "joinDate": "2023-12-10",
        "verified": true
    },
    {
        "username": "Avery Lopez",
        "id": "20",
        "name": "Avery Lopez",
        "bio": "🔮 Mystic wanderer | Weaver of spells | Moonlit ritualist | Embracing the ancient craft | Dancing with shadows and light | Enchanting hearts, stirring souls 🌙✨🌿",
        "avatar": "https://loremflickr.com/cache/resized/65535_52754484967_cae0fa2465_m_170_170_nofilter.jpg",
        "header": "https://loremflickr.com/1024/768/moon",
        "age": 17,
        "location": "Morristown, Tennessee",
        "followers": 420,
        "contactInfo": {
            "email": "avery@example.com"
        },
        "joinDate": "2024-02-15",
        "verified": false
    },
    {
        "username": "Harper King",
        "id": "21",
        "name": "Harper King",
        "bio": "🎶 Music addict | Concert-goer | Vinyl collector | Lost in melodies | Let the rhythm guide the soul 🎧🎶✨.",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/507.jpg",
        "header": "https://loremflickr.com/1024/768/fractal",
        "age": 16,
        "location": "Toronto, Ontario, Canada",
        "followers": 670,
        "contactInfo": {
            "email": "harper@example.com"
        },
        "joinDate": "2024-04-07",
        "verified": true
    },
    {
        "username": "Lucas Campbell",
        "id": "22",
        "name": "Lucas Campbell",
        "bio": "📸 Photography enthusiast | Capturing moments | Chasing golden hour | Finding beauty in the mundane | Through the lens of creativity 📷✨🌅",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/457.jpg",
        "header": "https://loremflickr.com/1024/768/camera",
        "age": 26,
        "location": "Los Angeles, California, USA",
        "followers": 780,
        "contactInfo": {
            "email": "lucas@example.com"
        },
        "joinDate": "2024-05-20",
        "verified": false
    },
    {
        "username": "Luna Young",
        "id": "23",
        "name": "Luna Young",
        "bio": "🎨 Creative mind | Art aficionado | Bookworm | Daydreamer | Seeking inspiration in every corner 📚🎨✨",
        "avatar": "https://loremflickr.com/cache/resized/65535_51788425799_5d82120eb0_n_170_170_nofilter.jpg",
        "header": "https://loremflickr.com/1024/768/woodshop",
        "age": 42,
        "location": "Stockholm, Sweden",
        "followers": 610,
        "contactInfo": {
            "email": "luna@example.com"
        },
        "joinDate": "2024-07-03",
        "verified": true
    },
    {
        "username": "beach_lover_123",
        "id": "24",
        "name": "Logan Cooper",
        "bio": "Beach lover, surfer, and sun chaser.",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1032.jpg",
        "header": "https://loremflickr.com/1024/768/surfer",
        "age": 22,
        "location": "Gold Coast, Queensland, Australia",
        "followers": 850,
        "contactInfo": {
            "email": "logan@example.com"
        },
        "joinDate": "2023-09-05",
        "verified": true
    },
    {
        "username": "Evelyn Perez",
        "id": "25",
        "name": "Evelyn Perez",
        "bio": "Dreamer, explorer, and lover of life.",
        "avatar": "https://loremflickr.com/cache/resized/65535_49593137447_1c14edc799_n_170_170_nofilter.jpg",
        "header": "https://loremflickr.com/1024/768/flowers",
        "age": 27,
        "location": "Miami, Florida, USA",
        "followers": 570,
        "contactInfo": {
            "email": "evelyn@example.com"
        },
        "joinDate": "2024-01-18",
        "verified": false
    },
    {
        "username": "William Clark",
        "id": "26",
        "name": "William Clark",
        "bio": "🚀 Tech geek | Coding ninja | Gamer at heart | Always exploring the latest gadgets | Future innovator in the making 💻🎮🔍",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1027.jpg",
        "header": "https://loremflickr.com/1024/768/xbox",
        "age": 63,
        "location": "Seattle, Washington, USA",
        "followers": 710,
        "contactInfo": {
            "email": "william@example.com"
        },
        "joinDate": "2024-03-03",
        "verified": true
    },
    {
        "username": "luxurious_fashionista",
        "id": "27",
        "name": "Fatima Al Tayer",
        "bio": "🌆 Dubai born & raised | Fashionista | Skyline admirer | Seeking luxury in the sands | Living that cosmopolitan life ✨👗🐪",
        "avatar": "",
        "header": "https://loremflickr.com/1024/768/fashion",
        "age": 46,
        "location": "Dubai, United Arab Emirates",
        "followers": 490,
        "contactInfo": {
            "email": "fatima@example.com"
        },
        "joinDate": "2024-04-16",
        "verified": false
    },
    {
        "username": "foodie_explorer",
        "id": "28",
        "name": "Mason Turner",
        "bio": "🍔 Foodie explorer | Culinary adventurer | Always on the hunt for the next delicious bite | Tasting my way around the world 🍽️🌍🍜",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/355.jpg",
        "header": "https://loremflickr.com/1024/768/culinary",
        "age": 73,
        "location": "Paris, France",
        "followers": 920,
        "contactInfo": {
            "email": "mason@example.com"
        },
        "joinDate": "2023-06-28",
        "verified": true
    },
    {
        "username": "the_fitness_enthusiast",
        "id": "29",
        "name": "Scarlett Hill",
        "bio": "💪 Fitness fanatic | Gym junkie | Passionate about health and wellness | Chasing gains and pushing limits | Strong mind, strong body, strong spirit 💥🏋️‍♂️🥦",
        "avatar": "https://loremflickr.com/cache/resized/65535_53109836075_6d00199b12_m_170_170_nofilter.jpg",
        "header": "https://loremflickr.com/1024/768/gym",
        "age": 58,
        "location": "Toronto, Ontario, Canada",
        "followers": 810,
        "contactInfo": {
            "email": "scarlett@example.com"
        },
        "joinDate": "2023-08-11",
        "verified": false
    },
    {
        "username": "Plant_Kween_42",
        "id": "30",
        "name": "Joanne Stewart",
        "bio": "🌱 Plant parent | Green thumb enthusiast | Creating an urban jungle | Embracing the serenity of nature indoors 🌿🏡🌱",
        "avatar": "https://loremflickr.com/cache/resized/65535_49259258568_9e0cc52124_m_170_170_nofilter.jpg",
        "header": "https://loremflickr.com/1024/768/greenhouse",
        "age": 26,
        "location": "Cape Town, South Africa",
        "followers": 640,
        "contactInfo": {
            "email": "Annie@example.com"
        },
        "joinDate": "2024-01-24",
        "verified": true
    },
    {
        "username": "art_afficionado_789",
        "id": "31",
        "name": "Victoria Murphy",
        "bio": "Art lover, collector, and supporter.",
        "avatar": "https://loremflickr.com/cache/resized/65535_49259747801_4ee5c7d1d6_m_170_170_nofilter.jpg",
        "header": "https://loremflickr.com/1024/768/artist",
        "age": 34,
        "location": "New York City, New York, USA",
        "followers": 970,
        "contactInfo": {
            "email": "victoria@example.com"
        },
        "joinDate": "2023-05-08",
        "verified": true
    },
    {
        "username": "unique_user_19",
        "id": "32",
        "name": "Jackson Moore",
        "bio": "📚 Lifelong learner | Knowledge seeker | Curious mind | Exploring the universe through books | Constantly evolving 📖🔍🌌",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/776.jpg",
        "header": "https://loremflickr.com/1024/768/books",
        "age": 15,
        "location": "Melbourne, Victoria, Australia",
        "followers": 550,
        "contactInfo": {
            "email": "jackson@example.com"
        },
        "joinDate": "2024-03-17",
        "verified": false
    },
    {
        "username": "unique_user_20",
        "id": "33",
        "name": "Amelia Hughes",
        "bio": "🎭 Storyteller at heart | Theater lover | Embracing the magic of stage and screen | Every life a masterpiece in the making 🎭📖✨",
        "avatar": "https://loremflickr.com/cache/resized/65535_49481733073_dd47920670_n_170_170_nofilter.jpg",
        "header": "https://loremflickr.com/1024/768/theatre",
        "age": 22,
        "location": "Florence, Italy",
        "followers": 710,
        "contactInfo": {
            "email": "amelia@example.com"
        },
        "joinDate": "2024-05-01",
        "verified": true
    }
]

