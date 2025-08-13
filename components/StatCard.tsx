import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Stat } from "@/utils/types";

function StatCard({ icon: Icon, arrow: Arrow, title, amount, trend }: Stat) {
  return (
    <Card className="border-0 shadow-xl bg-white">
      <CardHeader className="font-medium capitalize">{title}</CardHeader>
      <CardContent className="flex gap-4 items-end">
        <div className="space-y-4">
          <h2 className="font-bold text-xl">{amount}</h2>
          <p className="text-xs ash-color-text flex items-center">
            <span
              className={`${
                trend == "up" ? "green-color-text" : "red-color-text"
              } flex items-center mr-1`}
            >
              <Arrow /> 12%
            </span>
            vs last month
          </p>
        </div>
        <Icon />
      </CardContent>
    </Card>
  );
}

export default StatCard;
