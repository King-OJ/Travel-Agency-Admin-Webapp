import React from "react";
import Logo from "@/icons/logo.svg";

function LogoAndTitle() {
  return (
    <div className="flex gap-2">
      <Logo />
      <h1 className="text-xl font-bold font-serif">Tourvisto</h1>
    </div>
  );
}

export default LogoAndTitle;
