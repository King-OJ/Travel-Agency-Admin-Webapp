import { Button } from "@/components/ui/button";
import React, { ComponentType } from "react";
import IconUp from "@/icons/increment.svg";
import IconDown from "@/icons/decrement.svg";
import ArrowUp from "@/icons/arrow-up-green.svg";
import ArrowDown from "@/icons/arrow-down-red.svg";
import StatCard from "@/components/StatCard";
import { Stat } from "@/utils/types";

function Dashboard() {
  const stats: Stat[] = [
    {
      title: "total users",
      amount: 12450,
      icon: IconUp,
      arrow: ArrowUp,
      trend: "up",
    },
    {
      title: "total trips",
      amount: 12450,
      icon: IconDown,
      arrow: ArrowDown,
      trend: "down",
    },
    {
      title: "active users today",
      amount: 520,
      icon: IconUp,
      arrow: ArrowUp,
      trend: "up",
    },
  ];
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col items-start gap-1">
          <h2 className="font-bold text-lg">Welcome Clement 👋</h2>
          <p className="ash-color-text">
            Track activities, trends and popular destinations in real time
          </p>
        </div>
        <Button>Create a trip</Button>
      </div>
      <ul className="flex gap-4 flex-col md:flex-row flex-wrap">
        {stats.map((stat, index) => {
          return (
            <li key={index}>
              <StatCard
                title={stat.title}
                amount={stat.amount}
                icon={stat.icon}
                arrow={stat.arrow}
                trend={stat.trend}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dashboard;
