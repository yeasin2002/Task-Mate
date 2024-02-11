"use client";

import { cn } from "@/lib";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";
import { HTMLAttributes } from "react";

interface ThemeSwitcherProps
  extends React.DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  iconsStyle?: string;
}

export const ThemeSwitcher = ({
  className,
  iconsStyle,
  ...rest
}: ThemeSwitcherProps) => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div
      {...rest}
      className={cn(
        "flex    cursor-pointer items-start justify-center rounded-full     *:size-full ",
        className
      )}
      onClick={() => {
        resolvedTheme === "light" ? setTheme("dark") : setTheme("light");
      }}
    >
      {resolvedTheme === "light" ? (
        <Sun className={cn(" ", iconsStyle)} />
      ) : (
        <Moon className={cn("text-white ", iconsStyle)} />
      )}
    </div>
  );
};
