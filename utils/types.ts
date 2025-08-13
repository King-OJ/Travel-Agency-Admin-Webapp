import { ComponentType } from "react";

export type Stat = {
  icon: ComponentType;
  arrow: ComponentType;
  title: string;
  amount: number;
  trend: "up" | "down";
};
