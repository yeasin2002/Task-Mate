import { Search as SearchIcon } from "lucide-react";
interface Props extends React.ComponentProps<"input"> {}

export const Search = ({ ...rest }: Props) => {
  return (
    <label
      htmlFor="search"
      className="flex  items-center   gap-x-2     border-b  pb-2  "
    >
      <SearchIcon />
      <input
        {...rest}
        id="search"
        type="search"
        placeholder="Search"
        className="border-none outline-none placeholder:font-semibold placeholder:text-base placeholder:text-gray-500 "
      />
    </label>
  );
};
