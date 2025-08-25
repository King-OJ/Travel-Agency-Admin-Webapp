import { Button } from "@/components/ui/button";
import UsersTable from "@/components/UsersTable";
import React from "react";
import PlusIcon from "@/icons/plus.svg";
import PaginationBtns from "@/components/PaginationBtns";

function AllUsers() {
  return (
    <div className="space-y-20">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col items-start gap-1">
          <h2 className="font-bold text-lg">Manage Users</h2>
          <p className="ash-text">
            Filter, sort, and access detailed user profiles
          </p>
        </div>
        <Button className="rounded-full [&_svg:not([class*=size-])]:h-5">
          <PlusIcon /> Add new user
        </Button>
      </div>

      <UsersTable />
    </div>
  );
}

export default AllUsers;
