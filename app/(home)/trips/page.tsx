import { Button } from "@/components/ui/button";
import React from "react";
import PlusIcon from "@/icons/plus.svg";
import TripsTable from "@/components/TripsTable";

function Trips() {
  return (
    <div className="space-y-20">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col items-start gap-1">
          <h2 className="font-bold text-lg">Manage Users</h2>
          <p className="ash-text">View and generate AI travel plans</p>
        </div>
        <Button className="rounded-full [&_svg:not([class*=size-])]:h-5">
          <PlusIcon /> Create a trip
        </Button>
      </div>

      <TripsTable />
    </div>
  );
}

export default Trips;
