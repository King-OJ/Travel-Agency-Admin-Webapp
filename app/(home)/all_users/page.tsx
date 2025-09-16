import UsersTable from "@/components/UsersTable";
import React from "react";
import Header from "@/components/Header";

function AllUsers() {
  return (
    <div className="space-y-20">
      <Header
        text={`Manage Users`}
        subtext="Filter, sort, and access detailed user profiles"
        ctaText="Add a new user"
      />

      <UsersTable />
    </div>
  );
}

export default AllUsers;
