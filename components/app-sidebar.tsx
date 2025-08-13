"use client";

import LogoAndTitle from "./LogoAndTitle";
import { sidebarItems } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutIcon from "@/icons/logout.svg";
import Image from "next/image";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-white h-screen max-w-[250px] w-full  ">
      <div className="py-10 flex flex-col gap-10 h-full">
        <div className="px-6">
          <LogoAndTitle />
        </div>

        <ul className="flex-1 gap-4 flex flex-col px-6">
          {sidebarItems.map(({ id, icon: Icon, label, href }) => {
            const isCurrentPath = pathname.includes(href);
            return (
              <li
                key={id}
                className={`${
                  isCurrentPath ? "text-white" : "ash-color-text"
                } transition duration-150`}
              >
                <Link
                  href={href}
                  className={`${
                    isCurrentPath
                      ? "blue-color-bg text-white"
                      : "hover:bg-[#f9fbfc] hover:shadow-2xs"
                  } w-full flex items-center gap-2 px-4 py-4 rounded-lg transition duration-150`}
                >
                  <Icon />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="">
          <button className="p-4 flex gap-4 items-center hover:cursor-pointer hover:bg-[#f9fbfc] hover:rounded-lg hover:shadow-2xs transition duration-150">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10">
                <Image
                  src="/assets/images/profilepic.jpg"
                  width={50}
                  height={50}
                  alt="profile pic"
                  className="rounded-full overflow-hidden object-cover h-full w-full"
                />
              </div>

              <div className="flex flex-col items-start">
                <h4 className="font-semibold text-sm">Clement Ojiguo</h4>
                <p className="text-xs ash-color-text font-medium">
                  dummy@gmail.com
                </p>
              </div>
            </div>
            <LogoutIcon />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default AppSidebar;
