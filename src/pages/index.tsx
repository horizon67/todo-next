import React from 'react';

import { TaskForm } from '../features/todos/components/TaskForm';
import { TaskList } from '../features/todos/components/TaskList';
import { useTasks } from '../features/todos/hooks/useTasks';

const IndexPage = () => {
  const { tasks, createTask, deleteTask } = useTasks();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-3xl font-bold">タスク管理</h1>
      <TaskForm onCreateTask={createTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default IndexPage;
