import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "./ui/table";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { allUsers } from "@/utils/mockdata";
import TrashIcon from "@/icons/trash.svg";
import { cn } from "@/lib/utils";

function UsersTable() {
  return (
    <Card className="border-0 bg-white">
      <CardContent>
        <Table>
          <TableHeader className="[&_tr]:border-0">
            <TableRow className="ash-text uppercase text-sm">
              <TableHead>name</TableHead>
              <TableHead>email address</TableHead>
              <TableHead>date joined</TableHead>
              <TableHead>itenary created</TableHead>
              <TableHead>status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allUsers.map((entry, i) => (
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
    </Card>
  );
}

export default UsersTable;
