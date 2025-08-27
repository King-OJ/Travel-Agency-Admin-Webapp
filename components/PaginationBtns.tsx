"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function PaginationBtns({
  totalPages,
  nextPage,
  prevPage,
  currentPage,
  changePage,
}: {
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
  prevPage: () => void;
  nextPage: () => void;
  changePage: (page: number) => void;
}) {
  return (
    <Pagination>
      <PaginationContent className="w-full flex justify-between items-center">
        <PaginationItem>
          <PaginationPrevious
            onClick={(e) => {
              e.preventDefault();
              prevPage();
            }}
            href="#"
            className="bg-white shadow-sm"
          />
        </PaginationItem>
        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                onClick={(e) => {
                  e.preventDefault();
                  changePage(i + 1);
                }}
                href="#"
                isActive={currentPage === i + 1}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem> */}
        </div>

        <PaginationItem>
          <PaginationNext
            onClick={(e) => {
              e.preventDefault();
              nextPage();
            }}
            href="#"
            className="bg-white shadow-sm"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationBtns;
