
import { Layout } from '../components/Layout';
import { TaskList } from '../components/TaskList';
import { useTaskStore } from '../store/taskStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { TaskType } from '../types/task';

const Index = () => {
  const { tasks, addTask, toggleTask, deleteTask, togglePin } = useTaskStore();
  const [newTask, setNewTask] = useState('');
  const [taskType, setTaskType] = useState<TaskType>('daily');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask, taskType);
      setNewTask('');
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-center">Tasks</h1>
          <p className="text-sm text-center text-muted-foreground">
            Tap four times to reveal your tasks
          </p>
        </div>

        <form onSubmit={handleAddTask} className="flex gap-2">
          <Input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </form>

        <div className="flex gap-2 justify-center">
          <Button
            variant={taskType === 'daily' ? 'default' : 'outline'}
            onClick={() => setTaskType('daily')}
            size="sm"
          >
            Daily
          </Button>
          <Button
            variant={taskType === 'permanent' ? 'default' : 'outline'}
            onClick={() => setTaskType('permanent')}
            size="sm"
          >
            Permanent
          </Button>
        </div>

        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onPin={togglePin}
        />
      </div>
    </Layout>
  );
};

export default Index;
