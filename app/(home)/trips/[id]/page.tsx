import TourDetails from "@/components/TourDetails";
import { tours } from "@/utils/mockdata";
import React from "react";
interface TripPageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: TripPageProps) => {
  const { id } = await params;
  const tour = tours.find((tour) => tour.id === Number(id));

  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <TourDetails tour={tour} />
    </div>
  );
};

export default Page;
