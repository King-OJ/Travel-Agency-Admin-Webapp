import { Button } from "@/components/ui/button";
import React from "react";
import StatCard from "@/components/StatCard";
import { stats, tours } from "@/utils/mockdata";
import TripsCard from "@/components/TripCard";
import UserGrowthChart from "@/components/UserGrowthChart";
import TripTrendsChart from "@/components/TripTrendsChart";
import LatestUser from "@/components/LatestUser";
import LatestTrips from "@/components/LatestTrips";
import { auth } from "@/auth";
import Header from "@/components/Header";

async function Dashboard() {
  const session = await auth();

  if (!session?.user) {
    return <div>Please sign in to view this page</div>;
  }

  const name = session.user.name?.split(" ")[0];
  return (
    <div className="space-y-20">
      <Header
        text={`Welcome ${name} 👋`}
        subtext="Track activities, trends and popular destinations in real time"
      />
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
