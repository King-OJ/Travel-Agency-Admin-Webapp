import { formatDate } from "@/lib/utils";
import { LatestTrips, LatestUser, Stat, Tour, Trip } from "./types";

export const stats: Stat[] = [
  {
    title: "total users",
    amount: 12450,
    trend: "up",
  },
  {
    title: "total trips",
    amount: 3210,
    trend: "down",
  },
  {
    title: "active users today",
    amount: 520,
    trend: "up",
  },
];

export const trips: Trip[] = [
  {
    id: 1,
    title: "Eko Hotels",
    destination: "Highland street, Lagos",
    imgUrl: "/assets/images/sample.jpeg",
    tags: ["Mountains", "City"],
    price: 300,
  },
  {
    id: 2,
    title: "Millenium Hotels",
    destination: "Lowland, Nigeria",
    imgUrl: "/assets/images/sample1.jpg",
    tags: ["Solo Travel", "Budget"],
    price: 790,
  },
  {
    id: 3,
    title: "High towers park",
    destination: "Port Harcourt, Rivers State",
    imgUrl: "/assets/images/sample2.jpg",
    tags: ["Luxury", "Beach"],
    price: 870,
  },
  {
    id: 4,
    title: "Grills in Uyo",
    destination: "Akwa Ibom, Nigeria",
    imgUrl: "/assets/images/sample3.jpg",
    tags: ["Sports", "Adventurous"],
    price: 870,
  },
];

export const latestUsers: LatestUser[] = [
  {
    name: "James Anderson",
    imgUrl: "/assets/images/james.webp",
    itenaries: 12,
  },
  {
    name: "Michael Johnson",
    imgUrl: "/assets/images/michael.webp",
    itenaries: 21,
  },
  {
    name: "David Brown",
    imgUrl: "/assets/images/david.webp",
    itenaries: 15,
  },
  {
    name: "Orlando Diggs",
    imgUrl: "/assets/images/james.webp",
    itenaries: 26,
  },
];

export const latestTrips: LatestTrips[] = [
  {
    name: "Lagos Island",
    imgUrl: "/assets/images/sample1.jpg",
    fromDate: "Jun 02",
    toDate: "June 12",
  },
  {
    name: "Port Harcourt Beach",
    imgUrl: "/assets/images/sample2.jpg",
    fromDate: "Jun 02",
    toDate: "Jun 12",
  },
  {
    name: "Calabar Carnival",
    imgUrl: "/assets/images/sample3.jpg",
    fromDate: "Jun 02",
    toDate: "Jun 12",
  },
  {
    name: "Eko Hotels",
    imgUrl: "/assets/images/sample4.jpg",
    fromDate: "Jun 02",
    toDate: "Jun 12",
  },
];

export const allTrips: Trip[] = [
  {
    id: 1,
    title: "Eko Hotels",
    destination: "Highland street, Lagos",
    imgUrl: "/assets/images/sample3.jpg",
    tags: ["Mountains", "City"],
    price: 300,
  },
  {
    id: 2,
    title: "Millennium Hotels",
    destination: "Lowland, Nigeria",
    imgUrl: "/assets/images/sample7.jpg",
    tags: ["Solo Travel", "Budget"],
    price: 790,
  },
  {
    id: 3,
    title: "High Towers Park",
    destination: "Port Harcourt, Rivers State",
    imgUrl: "/assets/images/sample1.jpg",
    tags: ["Luxury", "Beach"],
    price: 870,
  },
  {
    id: 4,
    title: "Grills in Uyo",
    destination: "Akwa Ibom, Nigeria",
    imgUrl: "/assets/images/sample2.jpg",
    tags: ["Sports", "Adventurous"],
    price: 870,
  },
  {
    id: 5,
    title: "Tropical Bay Resort",
    destination: "Badagry, Lagos",
    imgUrl: "/assets/images/sample5.jpg",
    tags: ["Beach", "Romantic"],
    price: 1200,
  },
  {
    id: 6,
    title: "Savannah Suites",
    destination: "Abuja, FCT",
    imgUrl: "/assets/images/sample6.jpg",
    tags: ["Business", "Luxury"],
    price: 950,
  },
  {
    id: 7,
    title: "Obudu Mountain Resort",
    destination: "Obudu, Cross River",
    imgUrl: "/assets/images/sample8.jpg",
    tags: ["Mountains", "Adventure"],
    price: 1100,
  },
  {
    id: 8,
    title: "Lush Garden Villas",
    destination: "Enugu, Nigeria",
    imgUrl: "/assets/images/sample4.jpg",
    tags: ["Nature", "Relaxation"],
    price: 600,
  },
  {
    id: 9,
    title: "The Palms Stay",
    destination: "Victoria Island, Lagos",
    imgUrl: "/assets/images/sample1.jpg",
    tags: ["City", "Luxury"],
    price: 1350,
  },
  {
    id: 10,
    title: "Eco Valley Camp",
    destination: "Ijebu Ode, Ogun State",
    imgUrl: "/assets/images/sample2.jpg",
    tags: ["Camping", "Eco-Friendly"],
    price: 480,
  },
  {
    id: 11,
    title: "Heritage Lodge",
    destination: "Ibadan, Oyo State",
    imgUrl: "/assets/images/sample7.jpg",
    tags: ["Cultural", "Budget"],
    price: 370,
  },
  {
    id: 12,
    title: "Ocean Breeze Hotel",
    destination: "Lekki, Lagos",
    imgUrl: "/assets/images/sample6.jpg",
    tags: ["Beach", "Nightlife"],
    price: 950,
  },
  {
    id: 13,
    title: "Peaceful Pines Resort",
    destination: "Jos, Plateau State",
    imgUrl: "/assets/images/sample3.jpg",
    tags: ["Mountains", "Retreat"],
    price: 710,
  },
  {
    id: 14,
    title: "Luxury Sands Hotel",
    destination: "Asaba, Delta State",
    imgUrl: "/assets/images/sample4.jpg",
    tags: ["Luxury", "Family"],
    price: 990,
  },
  {
    id: 15,
    title: "Serenity Resort",
    destination: "Lokoja, Kogi State",
    imgUrl: "/assets/images/sample5.jpg",
    tags: ["Nature", "Relaxation"],
    price: 520,
  },
  {
    id: 16,
    title: "Maple Comfort Inn",
    destination: "Abeokuta, Ogun State",
    imgUrl: "/assets/images/sample2.jpg",
    tags: ["Solo Travel", "Budget"],
    price: 430,
  },
  {
    id: 17,
    title: "Sunset Peak Lodge",
    destination: "Makurdi, Benue State",
    imgUrl: "/assets/images/sample8.jpg",
    tags: ["Hiking", "Viewpoints"],
    price: 890,
  },
  {
    id: 18,
    title: "Golden Horizon",
    destination: "Calabar, Cross River",
    imgUrl: "/assets/images/sample1.jpg",
    tags: ["Culture", "Beach"],
    price: 870,
  },
  {
    id: 19,
    title: "Coastal Haven Hotel",
    destination: "Warri, Delta State",
    imgUrl: "/assets/images/sample6.jpg",
    tags: ["Romantic", "Seaside"],
    price: 1140,
  },
  {
    id: 20,
    title: "Tranquil Trails Resort",
    destination: "Ado-Ekiti, Ekiti State",
    imgUrl: "/assets/images/sample3.jpg",
    tags: ["Nature", "Hiking"],
    price: 760,
  },
];

export const allUsers = [
  {
    name: "Lena Carter",
    email: "lena.carter@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 5,
    dateJoined: formatDate("2024-03-12"),
    status: "user",
  },
  {
    name: "Omar Bennett",
    email: "omar.bennett@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 3,
    dateJoined: formatDate("2023-11-06"),
    status: "admin",
  },
  {
    name: "Mia Rodriguez",
    email: "mia.rodriguez@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 8,
    dateJoined: formatDate("2024-07-18"),
    status: "user",
  },
  {
    name: "Ethan Moore",
    email: "ethan.moore@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 2,
    dateJoined: formatDate("2023-09-27"),
    status: "user",
  },
  {
    name: "Zara Khan",
    email: "zara.khan@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 10,
    dateJoined: formatDate("2023-12-30"),
    status: "admin",
  },
  {
    name: "Noah Kim",
    email: "noah.kim@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 7,
    dateJoined: formatDate("2024-01-22"),
    status: "user",
  },
  {
    name: "Sophie Green",
    email: "sophie.green@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 0,
    dateJoined: formatDate("2023-04-14"),
    status: "user",
  },
  {
    name: "Isaac Lee",
    email: "isaac.lee@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 12,
    dateJoined: formatDate("2024-09-10"),
    status: "admin",
  },
  {
    name: "Chloe Walker",
    email: "chloe.walker@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 6,
    dateJoined: formatDate("2024-06-25"),
    status: "user",
  },
  {
    name: "Liam Murphy",
    email: "liam.murphy@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 11,
    dateJoined: formatDate("2023-08-08"),
    status: "user",
  },
  {
    name: "Ava Thomas",
    email: "ava.thomas@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 4,
    dateJoined: formatDate("2024-11-15"),
    status: "user",
  },
  {
    name: "Daniel Wilson",
    email: "daniel.wilson@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 9,
    dateJoined: formatDate("2023-06-01"),
    status: "admin",
  },
  {
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 3,
    dateJoined: formatDate("2024-02-10"),
    status: "user",
  },
  {
    name: "Lucas Scott",
    email: "lucas.scott@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 0,
    dateJoined: formatDate("2023-10-03"),
    status: "user",
  },
  {
    name: "Aria Patel",
    email: "aria.patel@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 14,
    dateJoined: formatDate("2024-04-09"),
    status: "admin",
  },
  {
    name: "Henry Adams",
    email: "henry.adams@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 1,
    dateJoined: formatDate("2023-05-27"),
    status: "user",
  },
  {
    name: "Natalie Evans",
    email: "natalie.evans@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 13,
    dateJoined: formatDate("2023-07-20"),
    status: "user",
  },
  {
    name: "Jack Turner",
    email: "jack.turner@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 5,
    dateJoined: formatDate("2024-10-11"),
    status: "admin",
  },
  {
    name: "Lily Martin",
    email: "lily.martin@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 6,
    dateJoined: formatDate("2024-08-02"),
    status: "user",
  },
  {
    name: "Nathan Hall",
    email: "nathan.hall@example.com",
    imgUrl: "/assets/images/james.webp",
    itenaries: 15,
    dateJoined: formatDate("2023-03-18"),
    status: "user",
  },
];

export const tours: Tour[] = [
  {
    id: 1,
    title: "5-Day Nigerian Discovery: Lagos",
    subtitle: "5-Day Nigeria Adventure",
    features: "Cultural Heritage, Scenic Nature, and Local Cuisine",
    price: 525.0,
    destination: "Lagos, Badagry, Lekki",
    imgUrl: [
      "/assets/images/sample1.jpg",
      "/assets/images/sample2.jpg",
      "/assets/images/sample3.jpg",
    ],
    tags: ["Cultural", "Beach", "Adventure", "Budget"],
    description:
      "Experience the pulse of Nigeria in 5 unforgettable days across Lagos, Badagry, and Lekki. Discover rich history in Badagry, relax on Lekki beaches, and dive into vibrant city life. 🏖️🎶",
    noOfDays: 5,
    plans: {
      day1: {
        event: "Arrival & Lekki Exploration",
        activities: [
          "Arrive at Murtala Muhammed Airport & check-in",
          "Visit Lekki Conservation Centre",
          "Dinner at local seafood spot",
        ],
      },
      day2: {
        event: "Badagry Heritage Tour",
        activities: [
          "Tour Badagry Slave Museum",
          "Walk the Point of No Return trail",
          "Cultural performance in the evening",
        ],
      },
      day3: {
        event: "City & Market Day",
        activities: [
          "Explore Balogun Market",
          "Visit National Museum Lagos",
          "Dinner with live music at Terra Kulture",
        ],
      },
      day4: {
        event: "Beach Day & Arts",
        activities: [
          "Relax at Elegushi Beach",
          "Tour Nike Art Gallery",
          "Street food tasting night",
        ],
      },
      day5: {
        event: "Departure",
        activities: [
          "Souvenir shopping in Lekki Arts Market",
          "Depart for airport",
        ],
      },
    },
    visitationTimes: [
      "🌸 Dry Season (Nov–March): Best weather for sightseeing and cultural festivals.",
      "🔥 Harmattan (Dec–Feb): Cool, dusty winds with clear skies.",
      "🎉 December Holidays: Vibrant with festivals and concerts.",
    ],
  },

  {
    id: 2,
    title: "5-Day Nigerian Discovery: Abuja",
    subtitle: "5-Day Nigeria Adventure",
    features: "Cultural Heritage, Scenic Nature, and Local Cuisine",
    price: 490.0,
    destination: "Abuja, Aso Rock, Jabi Lake",
    imgUrl: [
      "/assets/images/sample4.jpg",
      "/assets/images/sample5.jpg",
      "/assets/images/sample6.jpg",
    ],
    tags: ["Nature", "Cultural", "Luxury", "Historical"],
    description:
      "Discover Nigeria’s capital with a blend of modern vibes, serene lakes, and iconic landmarks. Climb Aso Rock, cruise on Jabi Lake, and dine under the stars. 🌄🛶",
    noOfDays: 5,
    plans: {
      day1: {
        event: "Arrival in Abuja",
        activities: [
          "Check-in and relax at hotel",
          "Evening stroll at Jabi Lake Mall",
          "Dinner with live music",
        ],
      },
      day2: {
        event: "Nature & Hike Day",
        activities: [
          "Climb Aso Rock",
          "Visit Millennium Park",
          "Evening picnic at Jabi Lake",
        ],
      },
      day3: {
        event: "Cultural Immersion",
        activities: [
          "Visit Arts & Crafts Village",
          "National Mosque & Ecumenical Centre tour",
          "Taste northern cuisine at local restaurant",
        ],
      },
      day4: {
        event: "Adventure & Leisure",
        activities: [
          "Zuma Rock photo stop",
          "Go karting or water sports at Jabi Park",
          "Spa relaxation",
        ],
      },
      day5: {
        event: "Departure",
        activities: ["Quick city shopping", "Airport transfer & goodbye"],
      },
    },

    visitationTimes: [
      "🌸 Dry Season (Nov–March): Ideal for outdoor adventures.",
      "🔥 Harmattan (Dec–Feb): Clear skies and cool air.",
      "🌧 Rainy Season (April–October): Lush but humid.",
    ],
  },

  {
    id: 3,
    title: "5-Day Nigerian Discovery: Calabar & Obudu",
    subtitle: "5-Day Nigeria Adventure",
    features: "Rainforest Escapes, Mountain Views, and Festive Culture",
    price: 610.0,
    destination: "Calabar, Obudu, Tinapa",
    imgUrl: [
      "/assets/images/sample2.jpg",
      "/assets/images/sample7.jpg",
      "/assets/images/sample1.jpg",
    ],
    tags: ["Nature", "Adventure", "Luxury", "Cultural"],
    description:
      "Journey into Nigeria’s lush southeast. Ride cable cars in Obudu, relax at Tinapa Resort, and dance through Calabar’s carnival culture. 🌿⛰️",
    noOfDays: 5,
    plans: {
      day1: {
        event: "Arrival in Calabar",
        activities: [
          "Hotel check-in and rest",
          "Evening walk by Calabar River",
          "Dinner at Marina Resort",
        ],
      },
      day2: {
        event: "Obudu Mountain Adventure",
        activities: [
          "Drive to Obudu Cattle Ranch",
          "Ride the cable car to mountain top",
          "Bonfire & night under the stars",
        ],
      },
      day3: {
        event: "Nature & Wellness",
        activities: [
          "Visit waterfall and canopy walkway",
          "Local spa session",
          "Taste local Efik dishes",
        ],
      },
      day4: {
        event: "Cultural Day in Calabar",
        activities: [
          "Slave History Museum tour",
          "Tinapa Free Zone shopping",
          "Street performance or carnival rehearsal",
        ],
      },
      day5: {
        event: "Departure",
        activities: ["Visit Calabar market", "Transfer to airport"],
      },
    },

    visitationTimes: [
      "🎉 December Holidays: Calabar Carnival & festive events.",
      "🌧 Rainy Season (April–October): Best for lush scenery.",
      "🌸 Dry Season (Nov–March): Cooler, pleasant travel.",
    ],
  },
  // Continuing from previous array...

  {
    id: 4,
    title: "5-Day Nigerian Discovery: Kano & Katsina",
    subtitle: "5-Day Nigeria Adventure",
    features: "Ancient History, Culture, and Northern Architecture",
    price: 470.0,
    destination: "Kano, Katsina, Zaria",
    imgUrl: [
      "/assets/images/sample3.jpg",
      "/assets/images/sample8.jpg",
      "/assets/images/sample4.jpg",
    ],
    tags: ["Historical", "Cultural", "Budget", "Adventure"],
    description:
      "Explore Nigeria’s ancient northern cities with their rich empires, mosques, and traditional arts. From the ancient city walls to centuries-old palaces, history breathes here. 🕌📜",
    noOfDays: 5,
    plans: {
      day1: {
        event: "Arrival in Kano",
        activities: [
          "Check into traditional guesthouse",
          "Tour Kano City Walls",
          "Dinner with Hausa music",
        ],
      },
      day2: {
        event: "Cultural Day",
        activities: [
          "Gidan Makama Museum visit",
          "Dye pits and leather market tour",
          "Tea and suya in Kurmi Market",
        ],
      },
      day3: {
        event: "Katsina Exploration",
        activities: [
          "Travel to Katsina",
          "Visit Emir’s Palace and Gobarau Minaret",
          "Try local delicacies",
        ],
      },
      day4: {
        event: "Zaria City Tour",
        activities: [
          "Explore Ahmadu Bello University campus",
          "Visit Queen Amina’s Wall",
          "Relaxing night at local hotel",
        ],
      },
      day5: {
        event: "Departure",
        activities: ["Visit Zaria craft shops", "Head to airport"],
      },
    },

    visitationTimes: [
      "🔥 Harmattan (Dec–Feb): Cool, dry and ideal for touring.",
      "🌸 Dry Season (Nov–March): Great for open-air exploration.",
      "🎉 December Holidays: Traditional festivals and events.",
    ],
  },

  {
    id: 5,
    title: "5-Day Nigerian Discovery: Jos & Plateau State",
    subtitle: "5-Day Nigeria Adventure",
    features: "Cool Climate, Rock Formations, and Local Culture",
    price: 510.0,
    destination: "Jos, Plateau, Riyom",
    imgUrl: [
      "/assets/images/sample5.jpg",
      "/assets/images/sample1.jpg",
      "/assets/images/sample6.jpg",
    ],
    tags: ["Nature", "Adventure", "Cultural", "Budget"],
    description:
      "Escape to the serene landscapes of Plateau State. Enjoy cool weather, rock formations, and a calm pace. A refreshing experience away from the heat. 🪨🌤️",
    noOfDays: 5,
    plans: {
      day1: {
        event: "Arrival in Jos",
        activities: [
          "Arrive via Jos Airport",
          "City tour & Jos Wildlife Park",
          "Dinner at Jos Club",
        ],
      },
      day2: {
        event: "Nature Day",
        activities: [
          "Hike around Riyom Rock",
          "Visit Assop Falls",
          "Picnic in the countryside",
        ],
      },
      day3: {
        event: "Cultural Day",
        activities: [
          "National Museum & Nok artifacts",
          "Local village visit",
          "Traditional dance performance",
        ],
      },
      day4: {
        event: "Adventure & Relaxation",
        activities: [
          "Horseback riding or biking trail",
          "Craft shopping in Jos market",
          "Bonfire & storytelling night",
        ],
      },
      day5: {
        event: "Departure",
        activities: ["Breakfast & airport transfer"],
      },
    },

    visitationTimes: [
      "🌸 Dry Season (Nov–March): Cool and ideal for hiking.",
      "🎉 December Holidays: Calm, yet festive vibes.",
      "🌧 Rainy Season (June–Sept): Green but muddy terrain.",
    ],
  },

  {
    id: 6,
    title: "5-Day Nigerian Discovery: Ibadan & Oyo",
    subtitle: "5-Day Nigeria Adventure",
    features: "Colonial Charm, University Town, and Western Heritage",
    price: 455.0,
    destination: "Ibadan, Oyo, Iseyin",
    imgUrl: [
      "/assets/images/sample7.jpg",
      "/assets/images/sample3.jpg",
      "/assets/images/sample2.jpg",
    ],
    tags: ["Cultural", "Historical", "Budget", "City"],
    description:
      "Experience Yoruba heartland with a blend of academia, ancient sites, and bustling markets. Climb Bower’s Tower and explore the old Oyo Empire. 🏛️📚",
    noOfDays: 5,
    plans: {
      day1: {
        event: "Arrival in Ibadan",
        activities: [
          "Check in near University of Ibadan",
          "Visit Agodi Gardens",
          "Evening food tour",
        ],
      },
      day2: {
        event: "Historical Ibadan",
        activities: [
          "Explore Mapo Hall",
          "Climb Bower’s Tower",
          "Shop at Dugbe Market",
        ],
      },
      day3: {
        event: "Oyo City Visit",
        activities: [
          "Day trip to Old Oyo National Park",
          "Visit Alaafin's Palace",
          "Picnic in Iseyin hills",
        ],
      },
      day4: {
        event: "Cultural Exploration",
        activities: [
          "Yoruba cultural center tour",
          "Textile dyeing demonstration",
          "Evening at cultural dance show",
        ],
      },
      day5: {
        event: "Departure",
        activities: ["Visit Bodija Market", "Return trip"],
      },
    },

    visitationTimes: [
      "🌸 Dry Season (Nov–March): Best time for outdoor activities.",
      "🎉 December Holidays: Festivals and family gatherings.",
      "🌧 Rainy Season (April–Oct): Heavy rains but vibrant markets.",
    ],
  },

  {
    id: 7,
    title: "5-Day Nigerian Discovery: Enugu & Nsukka",
    subtitle: "5-Day Nigeria Adventure",
    features: "Coal City History, Hills, and Local Culture",
    price: 490.0,
    destination: "Enugu, Nsukka, Awhum",
    imgUrl: [
      "/assets/images/sample8.jpg",
      "/assets/images/sample6.jpg",
      "/assets/images/sample5.jpg",
    ],
    tags: ["Historical", "Adventure", "Nature", "Cultural"],
    description:
      "Venture into southeastern Nigeria to explore coal mines, waterfalls, and the warm hospitality of the Igbo people. 🧗‍♂️⛲",
    noOfDays: 5,
    plans: {
      day1: {
        event: "Arrival in Enugu",
        activities: [
          "Hotel check-in and evening walk",
          "Dinner with live highlife music",
        ],
      },
      day2: {
        event: "Hiking Day",
        activities: [
          "Climb Ngwo Pine Forest trail",
          "Explore caves and waterfalls",
          "Lunch at mountain top",
        ],
      },
      day3: {
        event: "Nsukka Visit",
        activities: [
          "UNN Art Museum tour",
          "Explore town markets",
          "Return to Enugu",
        ],
      },
      day4: {
        event: "Spiritual Retreat & Nature",
        activities: [
          "Awhum Waterfall and Monastery visit",
          "Quiet afternoon meditation",
          "Evening Igbo dance class",
        ],
      },
      day5: {
        event: "Departure",
        activities: ["Breakfast and checkout"],
      },
    },

    visitationTimes: [
      "🌸 Dry Season (Nov–March): Ideal for hiking and waterfalls.",
      "🎉 December Holidays: Local carnivals and dances.",
      "🌧 Rainy Season (May–Oct): Waterfalls in full force.",
    ],
  },

  {
    id: 8,
    title: "5-Day Nigerian Discovery: Warri & Delta State",
    subtitle: "5-Day Nigeria Adventure",
    features: "Creek Life, Local Cuisine, and Niger-Delta Culture",
    price: 530.0,
    destination: "Warri, Sapele, Ughelli",
    imgUrl: [
      "/assets/images/sample4.jpg",
      "/assets/images/sample7.jpg",
      "/assets/images/sample1.jpg",
    ],
    tags: ["Cultural", "Waterfront", "Budget", "Foodie"],
    description:
      "Savor the tastes and stories of the Niger Delta. Enjoy fresh seafood, river tours, and Itsekiri traditions in this offbeat adventure. 🐟🌊",
    noOfDays: 5,
    plans: {
      day1: {
        event: "Arrival in Warri",
        activities: [
          "Hotel check-in",
          "Dinner by the riverside",
          "Evening walk through Warri Main Market",
        ],
      },
      day2: {
        event: "Creek Tour",
        activities: [
          "Boat tour through local creeks",
          "Visit floating market",
          "Seafood barbecue night",
        ],
      },
      day3: {
        event: "Delta Culture",
        activities: [
          "Itsekiri Palace visit",
          "Dance/drum workshop",
          "Visit to Delta State University museum",
        ],
      },
      day4: {
        event: "Local Foodie Day",
        activities: [
          "Cooking class: banga soup & starch",
          "Relaxation at Oghara Park",
          "Storytelling night",
        ],
      },
      day5: {
        event: "Departure",
        activities: ["Farewell brunch", "Transfer to airport"],
      },
    },

    visitationTimes: [
      "🌧 Rainy Season (April–October): River tours thrive.",
      "🌸 Dry Season (Nov–March): Ideal for travel comfort.",
      "🎉 December Holidays: Local parties and seafood feasts.",
    ],
  },

  {
    id: 9,
    title: "5-Day Nigerian Discovery: Ilorin & Kwara",
    subtitle: "5-Day Nigeria Adventure",
    features: "Islamic History, Natural Beauty, and Quiet Cities",
    price: 450.0,
    destination: "Ilorin, Esie, Offa",
    imgUrl: [
      "/assets/images/sample2.jpg",
      "/assets/images/sample6.jpg",
      "/assets/images/sample3.jpg",
    ],
    tags: ["Cultural", "Historical", "Nature", "Quiet"],
    description:
      "Kwara State offers peaceful escapes and rich cultural heritage. Visit ancient museums, explore savannah hills, and unwind in quiet towns. 🕌🏞️",
    noOfDays: 5,
    plans: {
      day1: {
        event: "Arrival in Ilorin",
        activities: [
          "Hotel check-in",
          "Explore Emir's Palace",
          "Dinner and rest",
        ],
      },
      day2: {
        event: "Museum & Culture Day",
        activities: [
          "Visit Esie Museum (stone figures)",
          "Attend local pottery demo",
          "Evening tea with locals",
        ],
      },
      day3: {
        event: "Nature Experience",
        activities: [
          "Visit Owu Waterfall",
          "Picnic in the forest",
          "Evening walk through Offa town",
        ],
      },
      day4: {
        event: "City Exploration",
        activities: [
          "Ilorin Central Mosque tour",
          "Shopping at Mandate Market",
          "Taste Amala and Gbegiri",
        ],
      },
      day5: {
        event: "Departure",
        activities: ["Check out and transfer to airport"],
      },
    },

    visitationTimes: [
      "🌸 Dry Season (Nov–March): Comfortable and scenic.",
      "🌧 Rainy Season (April–Oct): Waterfalls flow strongest.",
      "🎉 December Holidays: Peaceful, with cultural events.",
    ],
  },

  {
    id: 10,
    title: "5-Day Nigerian Discovery: Makurdi & Benue",
    subtitle: "5-Day Nigeria Adventure",
    features: "River Life, Farm Tours, and Local Vibes",
    price: 475.0,
    destination: "Makurdi, Gboko, Otukpo",
    imgUrl: [
      "/assets/images/sample5.jpg",
      "/assets/images/sample8.jpg",
      "/assets/images/sample2.jpg",
    ],
    tags: ["Nature", "Cultural", "Adventure", "Budget"],
    description:
      "Benue — the food basket of Nigeria — offers stunning riverside views, cultural warmth, and rich agricultural tours. 🚣‍♀️🌾",
    noOfDays: 5,
    plans: {
      day1: {
        event: "Arrival in Makurdi",
        activities: [
          "Check in by River Benue",
          "Evening canoe cruise",
          "Dinner with Tiv dance show",
        ],
      },
      day2: {
        event: "Agricultural Tour",
        activities: [
          "Farm visit and tasting tour",
          "Cooking class: pounded yam & egusi",
          "Evening music session",
        ],
      },
      day3: {
        event: "Cultural Day",
        activities: [
          "Explore Gboko market",
          "Visit Tor Tiv’s Palace",
          "Try traditional Tiv attire",
        ],
      },
      day4: {
        event: "Adventure Day",
        activities: [
          "Visit to Ushongo Hills",
          "Forest hike and picnic",
          "Rest at resort",
        ],
      },
      day5: {
        event: "Departure",
        activities: ["Riverfront breakfast", "Transfer to airport"],
      },
    },

    visitationTimes: [
      "🌸 Dry Season (Nov–March): Best time to enjoy river and farms.",
      "🌧 Rainy Season (April–Oct): Green landscapes and cool nights.",
      "🎉 December Holidays: Festive and welcoming.",
    ],
  },
];
