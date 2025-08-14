import HomeIcon from "@/icons/home.svg";
import UsersIcon from "@/icons/users.svg";
import TripsIcon from "@/icons/itinerary.svg";
import { AxisModel } from "@syncfusion/ej2-react-charts";

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

export const userXAxis: AxisModel = { valueType: "Category", title: "Day" };
export const userYAxis: AxisModel = {
  minimum: 0,
  maximum: 10,
  interval: 2,
  title: "Count",
};
