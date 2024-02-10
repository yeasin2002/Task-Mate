export type Task = {
  id: `${string}-${string}-${string}-${string}`;
  title: string;
  desc: string;
  isComplete: boolean;
  priority: "low" | "medium" | "hight";
  createdAt: Date;
  tags: string;
};
