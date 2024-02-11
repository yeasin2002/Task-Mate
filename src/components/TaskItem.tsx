import { Checkbox } from "@/components/ui";
import { cn } from "@/lib";
import { EditIcon, Trash } from "lucide-react";
import React from "react";
import { TaskModal } from "./TaskModal";

interface Props extends React.ComponentPropsWithRefD<"div"> {}

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
        <Checkbox
          id="blue-checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        eligendi inventore ratione repudiandae, nam fugit recusandae quisquam
        natus blanditiis dolorem.
      </p>
      <hr />
      <div className="flex justify-between items-center">
        <div>date</div>
        <div className="flex items-center gap-x-3 *:flex *:items-center my-2">
          <TaskModal>
            <EditIcon className=" text-yellow-600 size-5" />
          </TaskModal>
          <Trash className=" text-red-600 size-5" />
        </div>
      </div>
    </div>
  );
};
