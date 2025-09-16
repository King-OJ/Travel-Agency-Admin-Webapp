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
  let session;
  let name = "User";

  try {
    session = await auth();

    if (!session?.user) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Please sign in</h2>
            <p>You need to be authenticated to view this page.</p>
          </div>
        </div>
      );
    }

    name = session.user.name?.split(" ")[0] || "User";
  } catch (error) {
    console.error("Auth error:", error);
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Database Connection Error</h2>
          <p className="text-gray-600 mb-4">
            Unable to connect to the database. Please check your connection.
          </p>
          <Button onClick={() => window.location.reload()}>
            Retry Connection
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-20">
      <Header
        ctaText="Create a trip"
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
