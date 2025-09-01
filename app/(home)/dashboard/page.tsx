import { Button } from "@/components/ui/button";
import React from "react";
import StatCard from "@/components/StatCard";
import { stats, tours, trips } from "@/utils/mockdata";
import TripsCard from "@/components/TripCard";
import UserGrowthChart from "@/components/UserGrowthChart";
import TripTrendsChart from "@/components/TripTrendsChart";
import LatestUser from "@/components/LatestUser";
import LatestTrips from "@/components/LatestTrips";

function Dashboard() {
  return (
    <div className="space-y-20">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col items-start gap-1">
          <h2 className="font-bold text-lg">Welcome Clement 👋</h2>
          <p className="ash-text">
            Track activities, trends and popular destinations in real time
          </p>
        </div>
        <Button className="rounded-full">Create a trip</Button>
      </div>
      <ul className="gap-4 lg:gap-6 grid md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => {
          return (
            <li key={index}>
              <StatCard
                title={stat.title}
                amount={stat.amount}
                trend={stat.trend}
              />
            </li>
          );
        })}
      </ul>
      <section className="space-y-6">
        <h3 className="font-semibold">Trips</h3>
        <ul className="gap-4 lg:gap-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tours.slice(0, 4).map((tour) => {
            return (
              <li key={tour.id}>
                <TripsCard tour={tour} />
              </li>
            );
          })}
        </ul>
      </section>

      <section className="grid md:grid-cols-2 gap-4 lg:gap-6 items-start">
        <UserGrowthChart />
        <TripTrendsChart />
      </section>

      <section className="grid md:grid-cols-2 gap-4 lg:gap-6 items-start">
        <LatestTrips />
        <LatestUser />
      </section>
    </div>
  );
}

export default Dashboard;
