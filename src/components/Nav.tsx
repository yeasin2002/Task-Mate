import { useTaskStore } from "@/store";
import { TaskModalInputs } from "@/types";
import React from "react";
import toast from "react-hot-toast";
import { Logo } from "./Logo";
import { TaskModal } from "./TaskModal";
import { Button } from "./ui";

interface Props extends React.ComponentProps<"div"> {}

export const Nav = ({ ...rest }: Props) => {
  const { addTask } = useTaskStore();
  const handleTaskAdd = (data: TaskModalInputs) => {
    const createRandomId = crypto.randomUUID();

    addTask({
      id: createRandomId,
      title: data.title,
      desc: data.desc,
      priority: data.priority!,
      isComplete: false,
      createdAt: new Date(),
    });
    toast.success("Task added successfully");
  };
  return (
    <div {...rest} className="flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <Logo className="size-8 " />
        <p className="text-lg font-semibold   font-serif text-gray-800">
          Task Mate
        </p>
      </div>
      <TaskModal isEditMode={false} onSave={handleTaskAdd}>
        <Button>Add Task</Button>
      </TaskModal>
    </div>
  );
};
