import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
  Button,
} from "@/components/ui";
import { Task } from "@/types";
import { X } from "lucide-react";
import React from "react";
import { TaskRadios } from "./TaskRadios";

interface Props extends React.ComponentPropsWithRef<"div"> {
  children: React.ReactNode;
  taskData?: Task | undefined;
  isEditMode?: boolean;
  onSave?: (t: Task, e: boolean) => void;
}

export const TaskModal = ({
  children,
  taskData,
  isEditMode = false,
  onSave = () => {},
}: Props) => {
  const formHandler = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    onSave(taskData!, isEditMode);
  };
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>{children}</AlertDialogTrigger>
        <AlertDialogContent className="py-3">
          <div className="flex items-center justify-between ">
            <p>Task Actions</p>
            <AlertDialogCancel className="p-0">
              <X className="p-2 size-10" />
            </AlertDialogCancel>
          </div>
          <form onClick={formHandler} className="space-y-4">
            <input
              type="text"
              placeholder="Write Task Title"
              className="p-2 w-full  outline-none border border-gray-300 rounded-md"
            />
            <br />
            <textarea
              name="desc"
              id="dec"
              placeholder="Write Task Descriptions"
              className="p-2 w-full min-h-28 outline-none border border-gray-300 rounded-md"
            />
            <div className="flex items-center gap-x-3">
              <p>Priority : </p>
              <TaskRadios title={"all"} />
              <TaskRadios title={"complete"} />
              <TaskRadios title={"incomplete"} />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
