import { LatestTrips, LatestUser, Stat, Trip } from "./types";

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
    location: "Highland street, Lagos",
    imgUrl: "/assets/images/sample.jpeg",
    tags: ["Mountains", "City"],
    price: 300,
  },
  {
    id: 2,
    title: "Millenium Hotels",
    location: "Lowland, Nigeria",
    imgUrl: "/assets/images/sample1.jpg",
    tags: ["Solo Travel", "Budget"],
    price: 790,
  },
  {
    id: 3,
    title: "High towers park",
    location: "Port Harcourt, Rivers State",
    imgUrl: "/assets/images/sample2.jpg",
    tags: ["Luxury", "Beach"],
    price: 870,
  },
  {
    id: 4,
    title: "Grills in Uyo",
    location: "Akwa Ibom, Nigeria",
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
