import React from "react";
import { Logo } from "./Logo";
import { Button } from "./ui";

interface Props extends React.ComponentProps<"div"> {}

export const Nav = ({ ...rest }: Props) => {
  return (
    <div {...rest} className="flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <Logo className="size-8" />
        <p className="text-lg font-semibold   font-serif text-gray-800">
          Task Mate
        </p>
      </div>
      <div>
        <Button variant={"default"}>Add Task</Button>
      </div>
    </div>
  );
};
