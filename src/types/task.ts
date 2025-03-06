
export type TaskType = 'daily' | 'permanent';

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  type: TaskType;
  pinned: boolean;
  createdAt: Date;
}
