import { Calendar, MapPin, Star, Stars } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import { Tour } from "@/utils/types";

function TourDetails({ tour }: { tour: Tour }) {
  const { imgUrl, title, subtitle, noOfDays, tags, location } = tour;
  return (
    <section>
      <h3 className="font-bold text-2xl">{title}</h3>
      <div className="flex items-center space-x-4 my-4">
        <div className="flex items-center space-x-2 ash-text">
          <Calendar size={16} />
          <p className="font-medium">{noOfDays} day plan</p>
        </div>
        <div className="flex items-center space-x-2 ash-text">
          <MapPin size={16} />
          <p className="font-medium">{location}</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-3 grid-rows-2 w-full gap-4">
          <div className="col-span-2 row-span-2 relative h-72 rounded-lg overflow-hidden">
            <Image alt="" src={imgUrl[0]} fill className="w-full h-full" />
          </div>
          <div className="rounded-lg overflow-hidden relative">
            <Image alt="" src={imgUrl[1]} fill className="w-full h-full" />
          </div>
          <div className="rounded-lg overflow-hidden relative">
            <Image alt="" src={imgUrl[2]} fill className="w-full h-full" />
          </div>
        </div>
        <div className="flex justify-evenly items-center">
          <ul className="flex gap-4">
            {tags.map((tag, i) => (
              <li key={i}>
                <Badge
                  className={`text-gray-700 text-sm bg-gray-100 rounded-full capitalize font-semibold`}
                >
                  {tag}
                </Badge>
              </li>
            ))}
          </ul>

          <ul className="flex items-center">
            {Array.from({ length: 5 }, (_, i) => (
              <li key={i}>
                <Star fill="#FFC542" stroke="none" />
              </li>
            ))}
          </ul>

          <Badge className="text-[#B93815] bg-[#FFF4ED] rounded-full font-semibold">
            4.9 / 5.0
          </Badge>
        </div>
      </div>
    </section>
  );
}

export default TourDetails;
