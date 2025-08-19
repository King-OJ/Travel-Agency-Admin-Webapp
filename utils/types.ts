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
