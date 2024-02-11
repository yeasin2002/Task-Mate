export type Priority = "low" | "medium" | "high";

export type Task = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  title: string;
  desc: string;
  isComplete: boolean;
  priority: Priority | "";
  createdAt?: Date;
};

export type TaskModalInputs = {
  title: string;
  desc: string;
  priority: Priority | "";
};
