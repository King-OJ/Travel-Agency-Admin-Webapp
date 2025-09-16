import React from "react";
import AllTrips from "@/components/AllTrips";
import Header from "@/components/Header";

function Trips() {
  return (
    <div className="space-y-20">
      <Header
        text={`Trips`}
        subtext="View and generate AI travel plans"
        ctaText="Create a trip"
      />

      <AllTrips />
    </div>
  );
}

export default Trips;
