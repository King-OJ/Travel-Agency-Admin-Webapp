import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { latestTrips } from "@/utils/mockdata";
import Image from "next/image";

function LatestTrips() {
  return (
    <Card className="bg-white border-0">
      <CardHeader>
        <CardTitle>Latest Trips</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="[&_tr]:border-0">
            <TableRow className="ash-text uppercase text-xs">
              <TableHead>booking</TableHead>
              <TableHead>travel dates</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {latestTrips.map((entry, i) => (
              <TableRow
                key={i}
                className={`${
                  (i + 1) % 2 !== 0 ? "ash-bg" : "bg-white"
                } border-0`}
              >
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden">
                      <Image src={entry.imgUrl} alt="profile pic" fill />
                    </div>
                    <h6 className="font-semibold text-sm">{entry.name}</h6>
                  </div>
                </TableCell>
                <TableCell className="text-sm">
                  {entry.fromDate} - {entry.toDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default LatestTrips;
