import { Search } from "./Search";
import { TaskItem } from "./TaskItem";
interface Props extends React.ComponentProps<"div"> {}

const arr = Array.from({ length: 10 });

export const Board = ({ ...rest }: Props) => {
  return (
    <div {...rest} className="mt-10 space-y-6">
      <div className="flex items-center justify-between">
        <Search />
        {/* Filter Drop Down */}
        <button className="px-8 py-1  bg-gray-300 rounded-lg">Filter</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 gap-4 bg-ashe  w-full ">
        {arr.map((_, index) => (
          <TaskItem key={index} />
        ))}
      </div>
    </div>
  );
};
