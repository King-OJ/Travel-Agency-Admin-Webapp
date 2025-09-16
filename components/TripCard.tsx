import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import { Tour } from "@/utils/types";
import { tagStyles } from "@/utils/constants";
import Link from "next/link";

function TripCard({ tour }: { tour: Tour }) {
  const { price, imgUrl, title, destination, tags, id } = tour;
  return (
    <Link href={`/trips/${id}`}>
      <div className="shadow-xl overflow-hidden rounded-xl w-full h-full flex flex-col">
        <div className="relative">
          <Image
            alt="location photo"
            src={imgUrl[0]}
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

        <div className="p-4 bg-white flex flex-col flex-1">
          <h4 className="font-bold line-clamp-2">{title}</h4>
          <h6 className="flex font-medium space-x-2 ash-text text-xs mt-2 mb-6 ">
            {destination}
          </h6>
          <div className="flex gap-2 flex-wrap mt-auto">
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
    </Link>
  );
}

export default TripCard;
