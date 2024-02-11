import noTodoFoundImg from "@/assets/notTodoFound.png";
import React from "react";

interface Props extends React.ComponentProps<"div"> {}

export const NoTaskFound = ({ ...rest }: Props) => {
  return (
    <div
      {...rest}
      className="flex items-center justify-center size-full flex-col gap-y-2"
    >
      <img
        src={noTodoFoundImg}
        alt="no todo found"
        className="md:size-1/3 size-11/12 "
      />
      <p className="text-3xl font-bold text-gray-800">No Task Found</p>
      <p className="text-xl font-semibold text-gray-700">Add a Task </p>
    </div>
  );
};
