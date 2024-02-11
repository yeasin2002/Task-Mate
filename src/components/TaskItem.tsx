import { EditIcon, Trash } from "lucide-react";
import React from "react";
import { toast } from "react-hot-toast";

import calenderIcon from "@/assets/calender.svg";
import { Checkbox } from "@/components/ui";
import { cn } from "@/lib";
import { useTaskStore } from "@/store";
import { Task, TaskModalInputs } from "@/types";
import { getFormattedDate } from "@/utils";
import { TaskModal } from "./TaskModal";

interface Props extends React.ComponentPropsWithRef<"div"> {
  task: Task;
}

export const TaskItem = ({ task, ...rest }: Props) => {
  const taskDate = getFormattedDate(task.createdAt!);
  const { removeTask, markAsCompleteOrIncomplete, updateTask } = useTaskStore();

  const handleUpdateTask = (updatedTask: TaskModalInputs) => {
    updateTask(task.id, {
      ...updatedTask,
      id: task.id,
      isComplete: task.isComplete,
      createdAt: task.createdAt,
    });
    toast.success("Task updated successfully");
  };

  return (
    <div {...rest} className="p-4 shadow-2xl rounded-lg ">
      <div className="flex  items-center justify-between my-5">
        <p>
          <span
            className={cn("size-3  inline-block rounded-full  mx-1 ", {
              "bg-green-400": task.priority === "low",
              "bg-yellow-400": task.priority === "medium",
              "bg-red-400": task.priority === "high",
            })}
          />
          {task.title}
        </p>
        <Checkbox
          defaultChecked={task.isComplete}
          onClick={() => {
            markAsCompleteOrIncomplete(task.id);
            const completed = task.isComplete ? "incomplete" : "complete";
            toast.success(`Task marked as ${completed}`);
          }}
          id="blue-checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <p>{task.desc}</p>
      <hr className="mt-5" />
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-x-1">
          <img src={calenderIcon} alt="calender" className="size-7" />
          <p>{taskDate}</p>
        </div>
        <div className="flex items-center gap-x-3 *:flex *:items-center my-2">
          <TaskModal
            isEditMode={true}
            taskData={task}
            onSave={handleUpdateTask}
          >
            <EditIcon className=" text-yellow-600 size-5" />
          </TaskModal>
          <Trash
            className=" text-red-600 size-5 cursor-pointer"
            onClick={() => {
              removeTask(task.id);
              toast.success("Task removed successfully");
            }}
          />
        </div>
      </div>
    </div>
  );
};
