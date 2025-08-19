"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface SidebarItemProps {
  icon: string;
  label: string;
  collapsed: boolean;
  isActivePath: boolean;
  href: string;
}

function SidebarItem({
  icon: Icon,
  label,
  collapsed,
  isActivePath,
  href,
}: SidebarItemProps) {
  return (
    <Link href={href}>
      <div
        className={cn(
          isActivePath ? "blue-bg text-white" : "hover:bg-[#f9fbfc]",
          "w-full h-10 rounded-full flex items-center transition-all duration-200",
          collapsed ? "justify-center" : "justify-start pl-4"
        )}
      >
        <Icon />

        <span
          className={cn(
            "overflow-hidden whitespace-nowrap transition-all duration-300 ml-2",
            collapsed ? "opacity-0 w-0  ml-0" : "opacity-100 w-auto ml-2"
          )}
          style={{ display: "inline-block" }}
        >
          {label}
        </span>
      </div>
    </Link>
  );
}

export default SidebarItem;
