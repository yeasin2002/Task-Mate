import { Search as SearchIcon } from "lucide-react";
interface Props extends React.ComponentProps<"input"> {}

export const Search = ({ ...rest }: Props) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <SearchIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </div>
      <input
        {...rest}
        type="search"
        id="default-search"
        className="block w-full px-4 py-3 ps-10 text-sm text-gray-900 border-b border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none  shadow-inner placeholder:font-quicksand"
        placeholder="Search task..."
      />
    </div>
  );
};
