import noTodoFoundImg from "@/assets/notTodoFound.png";
import React from "react";

interface Props extends React.ComponentProps<"div"> {}

export const NoTaskFound = ({ ...rest }: Props) => {
  return (
    <div
      {...rest}
      className="flex place-items-center size-full flex-col gap-y-2 max-h-screen"
    >
      <img
        src={noTodoFoundImg}
        alt="no todo found"
        className="sm:size-2/3   md:size-6/12 aspect-square"
      />
      <p className="text-3xl font-bold xl:text-4xl  2xl:text-6xl text-gray-800">
        No Task Found
      </p>
      <p className="text-xl font-semibold text-gray-700 xl:text-xl  2xl:text-2xl">
        Add a Task{" "}
      </p>
    </div>
  );
};
