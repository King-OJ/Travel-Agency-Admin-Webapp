import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Image from "next/image";
import { latestUsers } from "@/utils/mockdata";

function LatestUser() {
  return (
    <Card className="bg-white border-0">
      <CardHeader>
        <CardTitle>Latest Users</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="[&_tr]:border-0">
            <TableRow className="ash-text uppercase text-sm">
              <TableHead>Name</TableHead>
              <TableHead>Itenary Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {latestUsers.map((entry, i) => (
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
                <TableCell className="text-sm">{entry.itenaries}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default LatestUser;
