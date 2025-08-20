import HomeIcon from "@/icons/home.svg";
import UsersIcon from "@/icons/users.svg";
import TripsIcon from "@/icons/itinerary.svg";

export const sidebarItems = [
  {
    id: 1,
    icon: HomeIcon,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 3,
    icon: UsersIcon,
    label: "All Users",
    href: "/all_users",
  },
  {
    id: 4,
    icon: TripsIcon,
    label: "AI Trips",
    href: "/trips",
  },
];

export const travelStyles = [
  "Relaxed",
  "Luxury",
  "Adventure",
  "Cultural",
  "Nature & Outdoors",
  "City Exploration",
];

export const interests = [
  "Food & Culinary",
  "Historical Sites",
  "Hiking & Nature Walks",
  "Beaches & Water Activities",
  "Museums & Art",
  "Nightlife & Bars",
  "Photography Spots",
  "Shopping",
  "Local Experiences",
];

export const tagStyles: Record<
  string,
  {
    textColor: string;
    bgColor: string;
  }
> = {
  Mountains: {
    textColor: "text-green-700",
    bgColor: "bg-green-100",
  },
  City: {
    textColor: "text-purple-700",
    bgColor: "bg-purple-100",
  },
  "Solo Travel": {
    textColor: "text-blue-700",
    bgColor: "bg-blue-100",
  },
  Budget: {
    textColor: "text-yellow-800",
    bgColor: "bg-yellow-100",
  },
  Luxury: {
    textColor: "text-indigo-700",
    bgColor: "bg-indigo-100",
  },
  Beach: {
    textColor: "text-cyan-700",
    bgColor: "bg-cyan-100",
  },
  Sports: {
    textColor: "text-orange-700",
    bgColor: "bg-orange-100",
  },
  Adventurous: {
    textColor: "text-red-700",
    bgColor: "bg-red-100",
  },
  Romantic: {
    textColor: "text-pink-700",
    bgColor: "bg-pink-100",
  },
  Business: {
    textColor: "text-gray-800",
    bgColor: "bg-gray-200",
  },
  Adventure: {
    textColor: "text-teal-700",
    bgColor: "bg-teal-100",
  },
  Nature: {
    textColor: "text-lime-700",
    bgColor: "bg-lime-100",
  },
  Relaxation: {
    textColor: "text-emerald-700",
    bgColor: "bg-emerald-100",
  },
  Camping: {
    textColor: "text-stone-700",
    bgColor: "bg-stone-100",
  },
  "Eco-Friendly": {
    textColor: "text-green-800",
    bgColor: "bg-green-200",
  },
  Cultural: {
    textColor: "text-amber-700",
    bgColor: "bg-amber-100",
  },
  Nightlife: {
    textColor: "text-fuchsia-700",
    bgColor: "bg-fuchsia-100",
  },
  Retreat: {
    textColor: "text-sky-700",
    bgColor: "bg-sky-100",
  },
  Family: {
    textColor: "text-rose-700",
    bgColor: "bg-rose-100",
  },
  Hiking: {
    textColor: "text-amber-700",
    bgColor: "bg-amber-100", // Note: Tailwind doesn’t include `brown` by default
  },
  Viewpoints: {
    textColor: "text-violet-700",
    bgColor: "bg-violet-100",
  },
  Seaside: {
    textColor: "text-sky-800",
    bgColor: "bg-sky-100",
  },
};
