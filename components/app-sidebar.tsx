"use client";

import LogoAndTitle from "./LogoAndTitle";
import { sidebarItems } from "@/utils/constants";
import { usePathname } from "next/navigation";
import LogoutIcon from "@/icons/logout.svg";
import Image from "next/image";
import { useState } from "react";
import SidebarItem from "./SidebarItem";
import { cn } from "@/lib/utils";
import { Switch } from "./ui/switch";
import { CustomSwitch } from "./CustomSwitch";
import { Label } from "./ui/label";

export function AppSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(true);
  const [pinned, setPinned] = useState(false);

  const handleMouseLeave = () => {
    if (!pinned) setCollapsed(true);
  };

  const handleMouseEnter = () => {
    if (!pinned) setCollapsed(false);
  };

  const handlePinToggle = (value: boolean) => {
    setPinned(value);
    if (value) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

  return (
    <aside
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "bg-white h-screen sticky top-0 z-50 transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="py-10 flex flex-col gap-10 h-full px-4">
        <LogoAndTitle collapsed={collapsed} />

        <nav className="flex-1 gap-8 flex flex-col mt-10 ">
          {sidebarItems.map(({ id, icon, label, href }) => {
            const isActivePath = pathname.includes(href);
            return (
              <SidebarItem
                key={id}
                collapsed={collapsed}
                icon={icon}
                label={label}
                href={href}
                isActivePath={isActivePath}
              />
            );
          })}
        </nav>
        <div className="space-y-6">
          <div className="flex items-center">
            <CustomSwitch
              id="sidebar-mode"
              checked={pinned}
              onCheckedChange={handlePinToggle}
            />
            <Label
              htmlFor="sidebar-mode"
              className={cn(
                collapsed ? "w-0 opacity-0 ml-0" : "w-auto opacity-100 ml-4",
                "transition-all duration-300 whitespace-nowrap"
              )}
            >
              Pin sidebar
            </Label>
          </div>

          <div
            className={cn(
              "flex items-center transition-all duration-300",
              collapsed ? "justify-center" : "justify-start"
            )}
          >
            <button
              className={cn(
                "flex p-2 items-center hover:cursor-pointer hover:bg-[#f9fbfc] hover:rounded-lg hover:shadow-2xs transition-all duration-300",
                collapsed ? "justify-center" : "gap-2 justify-start"
              )}
            >
              <div className="h-10 w-10">
                <Image
                  src="/assets/images/profilepic.jpg"
                  width={50}
                  height={50}
                  priority
                  alt="profile pic"
                  className="rounded-full overflow-hidden object-cover h-full w-full"
                />
              </div>

              <div
                className={cn(
                  "flex items-center transition-all duration-300",
                  collapsed ? "w-0 opacity-0 ml-0" : "w-auto opacity-100 ml-2"
                )}
              >
                <div className="flex flex-col items-start">
                  <h4 className="font-semibold text-sm">Clement Ojiguo</h4>
                  <p className="text-xs ash-text font-medium">
                    dummy@gmail.com
                  </p>
                </div>
                <LogoutIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default AppSidebar;
