import React from "react";
import TripCard from "./TripCard";
import { Tour } from "@/utils/types";

function TripsTable({
  tours,
  startIndex,
  endIndex,
}: {
  tours: Tour[];
  startIndex: number;
  endIndex: number;
}) {
  return (
    <ul className="gap-4 lg:gap-6 grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 pb-10">
      {tours.slice(startIndex, endIndex).map((trip) => {
        return (
          <li key={trip.id}>
            <TripCard tour={trip} />
          </li>
        );
      })}
    </ul>
  );
}

export default TripsTable;
