"use client";
import React from "react";
import { Button } from "./ui/button";
import PartialDialog from "./PartialDialog";

function Header({
  text,
  subtext,
  cta,
  ctaText,
}: {
  text: string;
  subtext: string;
  cta?: () => void;
  ctaText: string;
}) {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex flex-col items-start gap-1">
        <h2 className="font-bold text-lg">{text}</h2>
        <p className="ash-text">{subtext}</p>
      </div>
      <PartialDialog title={ctaText} />
    </div>
  );
}

export default Header;
