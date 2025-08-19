import React from "react";
import Logo from "@/icons/logo.svg";
import { cn } from "@/lib/utils";

interface LogoAndTitleProps {
  collapsed: boolean;
}

function LogoAndTitle({ collapsed }: LogoAndTitleProps) {
  return (
    <div
      className={cn(
        "flex items-center transition-all duration-300",
        collapsed ? "justify-center" : "justify-start"
      )}
    >
      <Logo />

      <h1
        style={{ display: "inline-block" }}
        className={cn(
          "text-xl font-bold font-serif transition-all duration-300",
          collapsed ? "w-0 opacity-0" : "w-auto opacity-100 ml-2"
        )}
      >
        Tourvisto
      </h1>
    </div>
  );
}

export default LogoAndTitle;
