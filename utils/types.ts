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
