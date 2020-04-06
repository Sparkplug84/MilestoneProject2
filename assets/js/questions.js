// QUIZ QUESTIONS - This is a seperate JS file, dedicated just for the quiestions of the quiz

const myQuestions = [
    {
        question: "Starting with the largest at the top, put these countries in order of total population",
        answers: [
            { "correct_order": 4, "details": "Ireland" },
            { "correct_order": 1, "details": "United States" },
            { "correct_order": 2, "details": "Russia" },
            { "correct_order": 0, "details": "China" },
            { "correct_order": 3, "details": "United Kingdom" }
        ]
    },
    {
        question: "Starting with the largest at the top, put these countries in order of size",
        answers: [
            { "correct_order": 2, "details": "Australia" },
            { "correct_order": 4, "details": "Ireland" },
            { "correct_order": 3, "details": "Mexico" },
            { "correct_order": 1, "details": "Canada" },
            { "correct_order": 0, "details": "Russia" }
        ]
    },
    {
        question: "Starting with the most at the top, put these languages in order of most spoken",
        answers: [
            { "correct_order": 1, "details": "English" },
            { "correct_order": 2, "details": "Hindustani" },
            { "correct_order": 4, "details": "Arabic" },
            { "correct_order": 0, "details": "Mandarin Chinese" },
            { "correct_order": 3, "details": "Spanish" }

        ]
    },
    {
        question: "Starting with the largest at the top put these continents in order of total area",
        answers: [
            { "correct_order": 3, "details": "South America" },
            { "correct_order": 0, "details": "Asia" },
            { "correct_order": 4, "details": "Europe" },
            { "correct_order": 1, "details": "Africa" },
            { "correct_order": 2, "details": "North America" }

        ]
    },
    {
        question: "Starting with the longest at the top put these rivers in order of length",
        answers: [
            { "correct_order": 2, "details": "Mississippi" },
            { "correct_order": 1, "details": "Amazon" },
            { "correct_order": 0, "details": "Nile" },
            { "correct_order": 4, "details": "Mekong" },
            { "correct_order": 3, "details": "Danube" }

        ]
    },
    {
        question: "Starting with the highest at the top, put these mountains in order of height",
        answers: [
            { "correct_order": 4, "details": "Ben Nevis" },
            { "correct_order": 0, "details": "Mount Everest" },
            { "correct_order": 3, "details": "Mont Blanc" },
            { "correct_order": 2, "details": "Mount Kilimanjaro" },
            { "correct_order": 1, "details": "K2" }

        ]
    },
    {
        question: "Starting with the largest at the top, put these cities in order of population",
        answers: [
            { "correct_order": 1, "details": "Tokyo" },
            { "correct_order": 4, "details": "Madrid" },
            { "correct_order": 0, "details": "Beijing" },
            { "correct_order": 3, "details": "London" },
            { "correct_order": 2, "details": "Mexico City" }

        ]
    },
    {
        question: "Starting with the largest at the top, put these seas in order of area",
        answers: [
            { "correct_order": 4, "details": "Irish Sea" },
            { "correct_order": 2, "details": "North Sea" },
            { "correct_order": 1, "details": "Mediterranean Sea" },
            { "correct_order": 0, "details": "South China Sea" },
            { "correct_order": 3, "details": "Black Sea" }

        ]
    },
    {
        question: "Starting with the highest at the top, put these cities in order of altitude",
        answers: [
            { "correct_order": 1, "details": "Mexico City" },
            { "correct_order": 4, "details": "Amsterdam" },
            { "correct_order": 2, "details": "Nairobi" },
            { "correct_order": 0, "details": "Quito" },
            { "correct_order": 3, "details": "Paris" }

        ]
    },
    {
        question: "Starting with the largest put these oceans in order of total area",
        answers: [
            { "correct_order": 4, "details": "Arctic Ocean" },
            { "correct_order": 0, "details": "Pacific Ocean" },
            { "correct_order": 1, "details": "Atlantic Ocean" },
            { "correct_order": 3, "details": "Southern Ocean" },
            { "correct_order": 2, "details": "Indian Ocean" }

        ]
    },
    {
        question: "Starting with the oldest at the top, put these cities in order of age since continuously inhabited",
        answers: [
            { "correct_order": 3, "details": "Paris" },
            { "correct_order": 2, "details": "Rome" },
            { "correct_order": 0, "details": "Damascus" },
            { "correct_order": 4, "details": "Dubai" },
            { "correct_order": 1, "details": "Athens" }

        ]
    },
    {
        question: "Starting with the largest at the top, put these islands in order of size",
        answers: [
            { "correct_order": 2, "details": "Great Britain" },
            { "correct_order": 1, "details": "Madagascar" },
            { "correct_order": 4, "details": "Corsica" },
            { "correct_order": 3, "details": "Cuba" },
            { "correct_order": 0, "details": "Greenland" }

        ]
    },
    {
        question: "Starting with the highest at the top, put these waterfalls in order of height",
        answers: [
            { "correct_order": 1, "details": "Yosemite Falls" },
            { "correct_order": 4, "details": "Niagara Falls" },
            { "correct_order": 3, "details": "Iguazu Falls" },
            { "correct_order": 0, "details": "Angel Falls" },
            { "correct_order": 2, "details": "Victoria Falls" }

        ]
    },
    {
        question: "Starting with the largest at the top, put these deserts in order of total area",
        answers: [
            { "correct_order": 4, "details": "Mojave Desert" },
            { "correct_order": 0, "details": "Sahara Desert" },
            { "correct_order": 1, "details": "Australian Desert" },
            { "correct_order": 2, "details": "Arabian Desert" },
            { "correct_order": 3, "details": "Kalahari Desert" }

        ]
    },
    {
        question: "Starting with the largest at the top, put these African countries in order of total area",
        answers: [
            { "correct_order": 1, "details": "Nigeria" },
            { "correct_order": 2, "details": "Morocco" },
            { "correct_order": 3, "details": "Ghana" },
            { "correct_order": 4, "details": "Mauritius" },
            { "correct_order": 0, "details": "Algeria" }

        ]
    },
    {
        question: "Starting with the largest at the top, put these European countries in order of total area",
        answers: [
            { "correct_order": 2, "details": "Italy" },
            { "correct_order": 1, "details": "Spain" },
            { "correct_order": 0, "details": "Ukraine" },
            { "correct_order": 4, "details": "Malta" },
            { "correct_order": 3, "details": "Ireland" }

        ]
    },
    {
        question: "Starting with the largest at the top, put these U.S. states in order of total area",
        answers: [
            { "correct_order": 3, "details": "New York" },
            { "correct_order": 4, "details": "Rhode Island" },
            { "correct_order": 2, "details": "Florida" },
            { "correct_order": 0, "details": "Alaska" },
            { "correct_order": 1, "details": "California" }

        ]
    },
    {
        question: "Starting with the largest at the top, put these Asian countries in order of total area",
        answers: [
            { "correct_order": 4, "details": "Israel" },
            { "correct_order": 0, "details": "China" },
            { "correct_order": 1, "details": "India" },
            { "correct_order": 2, "details": "Vietnam" },
            { "correct_order": 3, "details": "South Korea" }

        ]
    },
    {
        question: "Starting with the largest at the top, put these South American countries in order of total area",
        answers: [
            { "correct_order": 4, "details": "Suriname" },
            { "correct_order": 2, "details": "Colombia" },
            { "correct_order": 1, "details": "Argentina" },
            { "correct_order": 0, "details": "Brazil" },
            { "correct_order": 3, "details": "Chile" }

        ]
    },
    {
        question: "Starting with the largest at the top, put these mountain ranges in order of total area",
        answers: [
            { "correct_order": 2, "details": "Himalayas" },
            { "correct_order": 4, "details": "Sierra Nevada" },
            { "correct_order": 3, "details": "Alps" },
            { "correct_order": 0, "details": "Andes" },
            { "correct_order": 1, "details": "Rocky Mountains" }

        ]
    }
];