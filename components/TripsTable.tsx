import React from "react";
import TripsCard from "./TripsCard";
import { allTrips } from "@/utils/mockdata";

function TripsTable() {
  return (
    <ul className="gap-4 lg:gap-6 grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {allTrips.map((trip) => {
        return (
          <li key={trip.id}>
            <TripsCard trip={trip} />
          </li>
        );
      })}
    </ul>
  );
}

export default TripsTable;
