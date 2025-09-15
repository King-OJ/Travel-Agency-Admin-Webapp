import React from "react";
import { Button } from "./ui/button";

function Header({ text, subtext }: { text: string; subtext: string }) {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex flex-col items-start gap-1">
        <h2 className="font-bold text-lg">{text}</h2>
        <p className="ash-text">{subtext}</p>
      </div>
      <Button className="rounded-full font-semibold">Create a trip</Button>
    </div>
  );
}

export default Header;
