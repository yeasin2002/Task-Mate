import { useTaskStore } from "@/store";
import { FilterAndSortArea, NoTaskFound, TaskItem } from ".";

interface Props extends React.ComponentProps<"div"> {}

export const Board = ({ ...rest }: Props) => {
  const { tasks } = useTaskStore();
  return (
    <div {...rest} className="mt-10 space-y-6">
      <FilterAndSortArea />
      {tasks.length === 0 && <NoTaskFound />}
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 gap-4 bg-ashe  w-full ">
        {tasks?.map((taskData) => (
          <TaskItem key={taskData.id} task={taskData} />
        ))}
      </div>
    </div>
  );
};
