"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "./ui/table";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { allUsers } from "@/utils/mockdata";
import TrashIcon from "@/icons/trash.svg";
import { cn } from "@/lib/utils";
import PaginationBtns from "./PaginationBtns";

function UsersTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(allUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  return (
    <Card className="border-0 bg-white">
      <CardContent className="pb-2">
        <Table>
          <TableHeader className="[&_tr]:border-0">
            <TableRow className="ash-text uppercase text-xs">
              <TableHead>name</TableHead>
              <TableHead>email address</TableHead>
              <TableHead>date joined</TableHead>
              <TableHead>itenary created</TableHead>
              <TableHead>status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allUsers
              .slice(startIndex, startIndex + itemsPerPage)
              .map((entry, i) => (
                <TableRow
                  key={i}
                  className={`${
                    (i + 1) % 2 !== 0 ? "ash-bg" : "bg-white"
                  } border-0`}
                >
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden">
                        <Image src={entry.imgUrl} alt="profile pic" fill />
                      </div>
                      <h6 className="font-semibold text-sm">{entry.name}</h6>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{entry.email}</TableCell>
                  <TableCell className="text-sm">{entry.dateJoined}</TableCell>
                  <TableCell className="text-sm text-center">
                    {entry.itenaries}
                  </TableCell>
                  <TableCell>
                    <div
                      className={cn(
                        "text-sm capitalize p-2 grid place-content-center font-medium rounded-full",
                        entry.status == "admin"
                          ? "bg-[#F2F4F7] text-[#344054]"
                          : "bg-[#ECFDF3] green-text"
                      )}
                    >
                      {entry.status}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">
                    <TrashIcon />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="border-t-[1px] pt-6 border-[#d8d7db] ">
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
      </CardFooter>
    </Card>
  );
}

export default UsersTable;
