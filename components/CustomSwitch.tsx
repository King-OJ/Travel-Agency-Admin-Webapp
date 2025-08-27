import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CustomSwitchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  id: string;
}

const CustomSwitch = React.forwardRef<HTMLButtonElement, CustomSwitchProps>(
  ({ checked, id, onCheckedChange, className, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = useState(checked ?? false);

    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;

    const toggle = () => {
      if (!isControlled) {
        setInternalChecked(!isChecked);
      }
      onCheckedChange?.(!isChecked);
    };

    return (
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={isChecked}
        data-state={isChecked ? "checked" : "unchecked"}
        onClick={toggle}
        ref={ref}
        className={cn(
          "relative inline-flex h-8 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
          "bg-[#e7eaea]",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition-transform duration-200 ease-in-out",
            isChecked ? "translate-x-5 bg-[#256ff1]" : "translate-x-0 bg-white"
          )}
        />
      </button>
    );
  }
);

CustomSwitch.displayName = "CustomSwitch";

export { CustomSwitch };
