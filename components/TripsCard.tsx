import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import { Trip } from "@/utils/types";
import { tagStyles } from "@/utils/constants";
import { cn } from "@/lib/utils";

function TripsCard({ trip }: { trip: Trip }) {
  const { price, imgUrl, title, location, tags } = trip;
  return (
    <div className="shadow-xl overflow-hidden rounded-xl w-full">
      <div className="relative">
        <Image
          alt="location photo"
          src={imgUrl}
          width={500}
          height={500}
          className="h-40 w-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-white text-[12px] font-bold rounded-full text-black">
            ${price}
          </Badge>
        </div>
      </div>

      <div className="p-4 bg-white">
        <h4 className="font-bold">{title}</h4>
        <h6 className="flex font-medium space-x-2 ash-text text-xs mt-1 mb-4">
          {location}
        </h6>
        <div className="flex gap-4">
          {tags.map((tag, i) => {
            const style = tagStyles[tag] || {
              textColor: "text-gray-700",
              bgColor: "bg-gray-100",
            };
            return (
              <Badge
                key={i}
                className={`${style.textColor} ${style.bgColor} rounded-full`}
              >
                {tag}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TripsCard;
