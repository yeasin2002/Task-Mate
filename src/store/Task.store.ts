import { Task } from "@/types";
import { create } from "zustand";
import { combine, persist } from "zustand/middleware";

export const useTaskStore = create(
  persist(
    combine(
      {
        tasks: [] as Task[],
      },
      (set) => ({
        addTask: (task: Task) =>
          set((state) => ({ tasks: [...state.tasks, task] })),
        removeTask: (id: string) =>
          set((state) => ({
            tasks: state.tasks.filter((t) => t.id !== id),
          })),
        updateTask: (id: string, task: Task) =>
          set((state) => ({
            tasks: state.tasks.map((t) => (t.id === id ? task : t)),
          })),
        markAsCompleteOrIncomplete: (id: string) =>
          set((state) => ({
            tasks: state.tasks.map((t) =>
              t.id === id ? { ...t, isComplete: !t.isComplete } : t
            ),
          })),
      })
    ),
    {
      name: "task-store",
    }
  )
);
