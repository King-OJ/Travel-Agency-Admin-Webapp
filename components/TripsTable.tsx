import React from "react";
import TripCard from "./TripCard";
import { Trip } from "@/utils/types";

function TripsTable({
  trips,
  startIndex,
  endIndex,
}: {
  trips: Trip[];
  startIndex: number;
  endIndex: number;
}) {
  return (
    <ul className="gap-4 lg:gap-6 grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 pb-10">
      {trips.slice(startIndex, endIndex).map((trip) => {
        return (
          <li key={trip.id}>
            <TripCard trip={trip} />
          </li>
        );
      })}
    </ul>
  );
}

export default TripsTable;
