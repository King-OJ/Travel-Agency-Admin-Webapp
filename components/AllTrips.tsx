"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import PlusIcon from "@/icons/plus.svg";
import TripsTable from "@/components/TripsTable";
import PaginationBtns from "@/components/PaginationBtns";
import { tours } from "@/utils/mockdata";

function AllTrips() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(tours.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  return (
    <div className="space-y-20">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col items-start gap-1">
          <h2 className="font-bold text-lg">Trips</h2>
          <p className="ash-text">View and generate AI travel plans</p>
        </div>
        <Button className="rounded-full [&_svg:not([class*=size-])]:h-5">
          <PlusIcon /> Create a trip
        </Button>
      </div>
      <div className="divide-y-[1px] divide-[#d8d7db]">
        <TripsTable
          tours={tours}
          startIndex={startIndex}
          endIndex={startIndex + itemsPerPage}
        />
        <div className="pt-10">
          <PaginationBtns
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            changePage={(page: number) => setCurrentPage(page)}
            prevPage={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            nextPage={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          />
        </div>
      </div>
    </div>
  );
}

export default AllTrips;
