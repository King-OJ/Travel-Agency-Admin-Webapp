import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Stat } from "@/utils/types";
import IconUp from "@/icons/increment.svg";
import IconDown from "@/icons/decrement.svg";
import ArrowUp from "@/icons/arrow-up-green.svg";
import ArrowDown from "@/icons/arrow-down-red.svg";

function StatCard({ title, amount, trend }: Stat) {
  return (
    <Card className="border-0 shadow-xl bg-white">
      <CardHeader className="font-medium capitalize">{title}</CardHeader>
      <CardContent className="flex gap-4 items-end">
        <div className="space-y-4">
          <h2 className="font-bold text-xl">{amount}</h2>
          <p className="text-xs ash-text flex items-center">
            <span
              className={`${
                trend == "up" ? "green-text" : "red-text"
              } flex items-center mr-1`}
            >
              {trend == "up" ? <ArrowUp /> : <ArrowDown />} 12%
            </span>
            vs last month
          </p>
        </div>
        {trend == "up" ? <IconUp /> : <IconDown />}
      </CardContent>
    </Card>
  );
}

export default StatCard;
