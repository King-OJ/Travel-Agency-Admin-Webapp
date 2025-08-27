import { Calendar, MapPin, Star, Stars } from "lucide-react";
import Image from "next/image";
import React from "react";
import image from "@/public/assets/images/sample1.jpg";
import image1 from "@/public/assets/images/sample2.jpg";
import image2 from "@/public/assets/images/sample3.jpg";
import { Badge } from "@/components/ui/badge";
function page() {
  return (
    <div className="mx-auto max-w-2xl">
      <section>
        <h3 className="font-bold text-2xl">
          5-Day Japan Highlightd: Culture, Food and Adventure
        </h3>
        <div className="flex items-center space-x-4 my-4">
          <div className="flex items-center space-x-2 ash-text">
            <Calendar size={16} />
            <p className="font-medium">5 day plan</p>
          </div>
          <div className="flex items-center space-x-2 ash-text">
            <MapPin size={16} />
            <p className="font-medium">Tokyo, Kyoto, Osaka</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-3 grid-rows-2 w-full gap-4">
            <div className="col-span-2 row-span-2 relative h-72 rounded-lg overflow-hidden">
              <Image alt="" src={image} fill className="w-full h-full" />
            </div>
            <div className="rounded-lg overflow-hidden relative">
              <Image alt="" src={image1} fill className="w-full h-full" />
            </div>
            <div className="rounded-lg overflow-hidden relative">
              <Image alt="" src={image2} fill className="w-full h-full" />
            </div>
          </div>
          <div className="flex justify-evenly items-center">
            <ul className="flex gap-4">
              <li>
                <Badge
                  className={`text-gray-700 text-sm bg-gray-100 rounded-full capitalize font-semibold`}
                >
                  luxury
                </Badge>
              </li>
              <li>
                <Badge
                  className={`text-blue-900 text-sm bg-blue-200 rounded-full capitalize font-semibold`}
                >
                  beach
                </Badge>
              </li>
              <li>
                <Badge
                  className={`text-purple-900 text-sm bg-purple-200 rounded-full capitalize font-semibold`}
                >
                  luxury
                </Badge>
              </li>
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
    </div>
  );
}

export default page;
