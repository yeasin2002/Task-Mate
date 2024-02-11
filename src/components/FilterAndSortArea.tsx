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

interface Props extends React.ComponentProps<"div"> {
  filterBy: Priority | "none";
  setFilterBy: (value: Priority | "none") => void;

  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const FilterAndSortArea = ({
  filterBy,
  setFilterBy,
  searchValue,
  setSearchValue,
  ...rest
}: Props) => {
  return (
    <div className="flex items-center justify-between" {...rest}>
      <Search
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger
          className={buttonVariants({
            variant: "outline",
            className:
              "text-gray-800 bg-gray-100 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 outline-none ",
          })}
        >
          <p className="font-Oswald  ">
            <span className="hidden sm:inline mx-1"> Filter By </span> Priority
            {filterBy !== "none" && `: ${filterBy}`}
          </p>
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
