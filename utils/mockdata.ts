import { Stat, Trip } from "./types";

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
