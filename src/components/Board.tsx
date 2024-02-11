import { useDebounce, useFilterTodo } from "@/hooks";
import { useTaskStore } from "@/store";
import { Priority } from "@/types";
import { useState } from "react";
import { FilterAndSortArea, NoTaskFound, TaskItem } from ".";

interface Props extends React.ComponentProps<"div"> {}

export const Board = ({ ...rest }: Props) => {
  const { tasks } = useTaskStore();
  const [searchValue, setSearchValue] = useState("");
  const [filterBy, setFilterBy] = useState<Priority | "none">("none");
  const debouncedValue = useDebounce(searchValue, 500);
  const filteredTask = useFilterTodo(tasks, debouncedValue, filterBy);

  return (
    <div {...rest} className="mt-10 space-y-6">
      <FilterAndSortArea
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <p>
        <span className="text-gray-700  font-semibold  text-lg  font-serif">
          Total Task:
        </span>
        <span className="text-blue-500 mx-1">{filteredTask.length}</span>
      </p>
      {filteredTask.length === 0 && <NoTaskFound />}
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 gap-4 bg-ashe  w-full ">
        {filteredTask?.map((taskData) => (
          <TaskItem key={taskData.id} task={taskData} />
        ))}
      </div>
    </div>
  );
};
