import { ComponentType } from "react";

export type Stat = {
  title: string;
  amount: number;
  trend: "up" | "down";
};

export type Trip = {
  id: number;
  title: string;
  location: string;
  imgUrl: string;
  tags: string[];
  price: number;
};

export type LatestUser = {
  name: string;
  imgUrl: string;
  itenaries: number;
};

export type LatestTrips = {
  name: string;
  imgUrl: string;
  fromDate: string;
  toDate: string;
};

export type Tour = {
  id: number;
  title: string;
  subtitle: string;
  features: string;
  price: number;
  location: string;
  imgUrl: string[];
  tags: string[];
  description: string;
  noOfDays: number;
  plan: {
    day1: {
      event: string;
      activities: string[];
    };
    day2: {
      event: string;
      activities: string[];
    };
    day3: {
      event: string;
      activities: string[];
    };
    day4: {
      event: string;
      activities: string[];
    };
    day5: {
      event: string;
      activities: string[];
    };
  }[];
  visitationTimes: string[];
};
