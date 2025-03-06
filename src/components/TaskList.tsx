
import { Task as TaskType } from '../types/task';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Check, Pin, Trash } from 'lucide-react';

interface TaskProps {
  task: TaskType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onPin: (id: string) => void;
}

const Task = ({ task, onToggle, onDelete, onPin }: TaskProps) => {
  return (
    <Card
      className={cn(
        'mb-2 p-4 transition-all duration-200 hover:shadow-lg',
        'backdrop-blur-sm bg-background/80 border border-border/50',
        task.completed && 'opacity-50'
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <button
            onClick={() => onToggle(task.id)}
            className={cn(
              'h-5 w-5 rounded border border-primary/20 transition-all duration-200',
              'hover:border-primary/50 flex items-center justify-center',
              task.completed && 'bg-primary'
            )}
          >
            {task.completed && <Check size={14} className="text-primary-foreground" />}
          </button>
          <div className="flex-1">
            <p className={cn('text-sm font-medium', task.completed && 'line-through')}>
              {task.title}
            </p>
            {task.description && (
              <p className="text-xs text-muted-foreground mt-1">{task.description}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onPin(task.id)}
            className={cn(
              'p-1 rounded-full transition-all duration-200',
              'hover:bg-accent',
              task.pinned && 'text-primary'
            )}
          >
            <Pin size={16} />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-1 rounded-full transition-all duration-200 hover:bg-destructive/10 hover:text-destructive"
          >
            <Trash size={16} />
          </button>
        </div>
      </div>
    </Card>
  );
};

interface TaskListProps {
  tasks: TaskType[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onPin: (id: string) => void;
}

export const TaskList = ({ tasks, onToggle, onDelete, onPin }: TaskListProps) => {
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.pinned === b.pinned) return 0;
    return a.pinned ? -1 : 1;
  });

  return (
    <div className="space-y-2">
      {sortedTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onPin={onPin}
        />
      ))}
    </div>
  );
};
