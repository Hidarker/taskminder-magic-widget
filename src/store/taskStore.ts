
import { create } from 'zustand';
import { Task, TaskType } from '../types/task';

interface TaskState {
  tasks: Task[];
  addTask: (title: string, type: TaskType, description?: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  togglePin: (id: string) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  addTask: (title, type, description) =>
    set((state) => ({
      tasks: [
        {
          id: crypto.randomUUID(),
          title,
          description,
          completed: false,
          type,
          pinned: false,
          createdAt: new Date(),
        },
        ...state.tasks,
      ],
    })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  togglePin: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, pinned: !task.pinned } : task
      ),
    })),
}));
