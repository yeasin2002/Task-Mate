import React, { useState } from "react";
interface Props extends React.ComponentProps<"div"> {}

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Priority } from "@/types";
import { Search } from "./Search";
import { buttonVariants } from "./ui";

const priorityOptions = ["none", "low", "medium", "high"];

export const FilterAndSortArea = ({ ...rest }: Props) => {
  const [filterBy, setFilterBy] = useState<Priority | "none">("none");
  return (
    <div className="flex items-center justify-between" {...rest}>
      <Search />

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger
          className={buttonVariants({
            variant: "outline",
            className:
              "text-gray-800 bg-gray-100 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 outline-none",
          })}
        >
          Priority {filterBy !== "none" && `: ${filterBy}`}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {priorityOptions.map((options) => {
            return (
              <DropdownMenuItem
                key={options}
                className="cursor-pointer capitalize flex items-center gap-x-2"
                onClick={() => setFilterBy(options as Priority)}
              >
                <input
                  type="radio"
                  name={options}
                  checked={filterBy === options}
                />
                <p>{options}</p>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
