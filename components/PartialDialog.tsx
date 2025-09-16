"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog";
import PlusIcon from "@/icons/plus.svg";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function PartialDialog({ title }: { title: string }) {
  const [sidebarPinned, setSidebarPinned] = useState(false);

  return (
    <Dialog>
      <DialogTrigger className="bg-blue-500 rounded-full text-white px-4 py-2 flex items-center">
        <PlusIcon className="!h-full mr-1" />
        {title}
      </DialogTrigger>

      <DialogPortal>
        {/* Custom overlay that doesn't cover full screen */}
        <DialogOverlay className="absolute inset-0 bg-black/40 z-40" />

        {/* DialogContent with controlled positioning */}
        <DialogContent
          className={cn(
            "fixed top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[600px] bg-white rounded-lg shadow-lg z-50",
            sidebarPinned ? "left-[calc(256px+50%)]" : "left-[calc(80px+50%)]" // 80px = Tailwind's `left-20`
          )}
        >
          <DialogHeader>
            <DialogTitle>My Custom Dialog</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            This is a dialog that doesn't cover the whole screen. Sidebar stays
            visible.
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
