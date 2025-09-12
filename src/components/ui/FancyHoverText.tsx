// components/ui/FancyHoverText.tsx
import * as React from "react";

type FancyHoverTextProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: React.ReactNode;
};

export default function FancyHoverText({
  children,
  className,
  ...props
}: FancyHoverTextProps) {
  const base =
    "relative inline-block " +
    // underline pseudo-element
    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 " +
    "after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 " +
    "after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] " +
    // hover state
    "hover:after:origin-bottom hover:after:scale-x-100";

  return (
    <button
      type="button"
      role="link"
      className={`${base} ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
