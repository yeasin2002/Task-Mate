import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
  Button,
} from "@/components/ui";
import { Priority, Task, TaskModalInputs } from "@/types";
import { X } from "lucide-react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props extends React.ComponentPropsWithRef<"div"> {
  children: React.ReactNode;
  taskData?: Task | undefined;
  isEditMode?: boolean;
  onSave?: (t: TaskModalInputs, mode: boolean) => void;
}

const priorityOptions: Priority[] = ["low", "medium", "high"];

export const TaskModal = ({
  children,
  taskData,
  isEditMode = false,
  onSave = () => {},
}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskModalInputs>({
    defaultValues: {
      title: taskData?.title || "",
      desc: taskData?.desc || "",
      priority: taskData?.priority || "low",
    },
  });

  const onSubmit: SubmitHandler<TaskModalInputs> = (data) => {
    onSave(data!, isEditMode);
    reset();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent className="py-3">
        <div className="flex items-center justify-between ">
          <p className="text-xl font-medium ">
            {isEditMode ? "Edit Task" : "Add Task"}
          </p>
          <AlertDialogCancel className="p-0">
            <X className="p-2 size-10" />
          </AlertDialogCancel>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Write Task Title"
            className="p-2 w-full  outline-none border border-gray-300 rounded-md"
            {...register("title", {
              required: "Title is required",
            })}
          />
          <p className="text-red-500 text-sm font-semibold  animate-pulse">
            {errors.title && errors?.title?.message}
          </p>

          <textarea
            id="dec"
            placeholder="Write Task Descriptions"
            className="p-2 w-full min-h-28 outline-none border border-gray-300 rounded-md"
            {...register("desc", {
              required: "desc is required",
            })}
          />

          <p className="text-red-500 text-sm font-semibold  animate-pulse">
            {errors.desc && errors?.desc?.message}
          </p>

          <div className="flex items-center gap-x-3">
            <p className="text-lg font-semibold">Priority : </p>
            {priorityOptions.map((options) => {
              return (
                <label
                  htmlFor={options}
                  className={
                    "flex items-center gap-x-[0.20rem] *:cursor-pointer"
                  }
                  key={options}
                >
                  <input
                    id={options}
                    type="radio"
                    defaultValue={options}
                    {...register("priority", {
                      required: "Priority is required",
                    })}
                  />
                  <span className="capitalize">{options}</span>
                </label>
              );
            })}
          </div>
          <p className="text-red-500 text-sm font-semibold  animate-pulse">
            {errors.priority && errors?.priority?.message}
          </p>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
