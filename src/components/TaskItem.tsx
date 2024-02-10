import { cn } from "@/lib";
import { EditIcon, Menu, Trash } from "lucide-react";
import React from "react";
import { TaskModal } from "./TaskModal";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface Props extends React.ComponentProps<"div"> {}

export const TaskItem = ({ ...rest }: Props) => {
  return (
    <div {...rest} className="p-4 shadow-2xl rounded-lg ">
      <div className="flex  items-center justify-between my-5">
        <p>
          <span
            className={cn("size-3 bg-red-600 inline-block rounded-full  mx-1 ")}
          />
          Complete
        </p>
        <Popover>
          <PopoverTrigger>
            <Menu />
          </PopoverTrigger>
          <PopoverContent className="max-w-24  p-0 *:transition-all  *:flex *:items-center gap-x-2 *:p-2">
            <TaskModal>
              <EditIcon className=" text-yellow-600" />
              Edit
            </TaskModal>
            <p>
              <Trash className=" text-red-600" />
              Delete
            </p>
          </PopoverContent>
        </Popover>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        eligendi inventore ratione repudiandae, nam fugit recusandae quisquam
        natus blanditiis dolorem.
      </p>
    </div>
  );
};
