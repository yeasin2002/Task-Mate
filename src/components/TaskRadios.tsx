import { cn } from "@/lib";
import React from "react";
interface Props extends React.ComponentPropsWithRef<"input"> {
  title: string;
  containerStyle?: string;
}

export const TaskRadios = ({ title, containerStyle, ...rest }: Props) => {
  return (
    <span className={cn("flex items-center gap-x-[0.20rem] ", containerStyle)}>
      <input type="radio" defaultValue={title} {...rest} />
      <span className="capitalize">{title}</span>
    </span>
  );
};
