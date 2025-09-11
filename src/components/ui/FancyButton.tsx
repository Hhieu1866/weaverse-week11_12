import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface FancyButtonProps {
  children: ReactNode;
  bgColor?: string; // lớp bg của trạng thái bình thường
  hoverBgColor?: string; // lớp bg của overlay khi hover
  textSize?: string;
  padding?: string; // ví dụ: "px-7 py-2"
  textColor?: string; // màu chữ trạng thái bình thường
  hoverTextColor?: string; // màu chữ khi hover
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const FancyButton = ({
  children,
  bgColor = "bg-white",
  hoverBgColor = "bg-black",
  textSize = "text-xs",
  padding = "px-7 py-3",
  textColor = "text-black",
  hoverTextColor = "text-primary",
  className,
  onClick,
  type = "button",
}: FancyButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full border-0 font-medium uppercase tracking-widest",
        bgColor,
        padding,
        className,
      )}
    >
      <div
        className={cn(
          "inline-flex items-center justify-center transition duration-700 group-hover:-translate-y-[150%]",
          textColor,
          textSize,
        )}
      >
        {children}
      </div>

      <div
        className={cn(
          "absolute inset-0 inline-flex h-full w-full translate-y-full items-center justify-center transition duration-700 group-hover:translate-y-0",
        )}
      >
        <span
          className={cn(
            "absolute inset-0 translate-y-full scale-y-0 rounded-full transition duration-700 group-hover:translate-y-0 group-hover:scale-150",
            hoverBgColor,
          )}
        />
        {/* label hover */}
        <span className={cn("z-10", hoverTextColor, textSize)}>{children}</span>
      </div>
    </button>
  );
};

export default FancyButton;
