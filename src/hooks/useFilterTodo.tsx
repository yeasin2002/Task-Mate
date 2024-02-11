import { Priority, Task } from "@/types";

export const useFilterTodo = (
  allTak: Task[],
  search: string,
  priority: Priority | "none"
) => {
  const filterBySearch = allTak.filter((task) => {
    if (search === "") return task;
    return task.title.toLowerCase().includes(search.toLowerCase());
  });
  const filterByPriority = filterBySearch.filter((item) => {
    switch (priority) {
      case "low": {
        return item.priority === "low";
      }
      case "medium": {
        return item.priority === "medium";
      }
      case "high": {
        return item.priority === "high";
      }
      default: {
        return item;
      }
    }
  });
  return filterByPriority;
};
