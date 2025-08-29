import TourDetails from "@/components/TourDetails";
import { tours } from "@/utils/mockdata";
import React, { FC } from "react";
interface TripPageProps {
  params: {
    id: string;
  };
}

const page: FC<TripPageProps> = ({ params }) => {
  const tripId = params.id;

  return (
    <div className="mx-auto max-w-4xl">
      <TourDetails tour={tours[Number(tripId)]} />
    </div>
  );
};

export default page;
