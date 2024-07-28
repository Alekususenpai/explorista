export const events = [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: "katie.png",
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        openSpots: 0,
        styling: 'row-start-3'
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: "wedding-photography.png",
        stats: {
            rating: '',
            reviewCount: 0
        },
        openSpots: 27,
        styling: 'row-start-2'
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: "mountain-bike.png",
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        openSpots: 3,
        styling: 'row-start-4',
    },
    {
        id: 4,
        title: "Artificial intelligence Intro",
        description: "Dive into the future of technology and join our online class to discover the wonders of AI.",
        price: 0,
        coverImg: "ai.jpg",
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        openSpots: 3,
        styling: 'col-start-3'
    },
    {
        id: 5,
        title: "Singing",
        description: "Unleash your inner songbird and enroll in our online singing class to elevate your vocal talents.",
        price: 20,
        coverImg: "singing.jpg",
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        openSpots: 3,
        styling: 'col-start-3 '
    },
    {
        id: 6,
        title: "Beekeeping",
        description: "Experience the sweet art of beekeeping from the comfort of your home with our engaging online class..",
        price: 35,
        coverImg: "beekeeping.jpg",
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        openSpots: 3,
        styling: 'col-start-4 row-start-2',
    },
]

export const users = [{
    id: 1,
    name: 'Lara Croft',
    email: 'lara@gmail.com',
    profileImage: 'lara.png',
    bio: 'Adventurer and archaeologist with a knack for discovering ancient artifacts and hidden treasures.',
    isHost: true,
    eventsHosted: [1, 2],
    eventsAttending: [3, 4]
},
{
    id: 2,
    name: 'Ellen Ripley',
    email: 'ellen@gmail.com',
    profileImage: 'ellen.png',
    bio: 'Spacefaring officer with a penchant for survival against all odds and a talent for leading daring missions.',
    isHost: false,
    eventsHosted: [],
    eventsAttending: [1, 5]
}
]
