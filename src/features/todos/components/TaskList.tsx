import React from 'react';

import { TaskItem } from './TaskItem';

export type Task = {
  id: number;
  content: string;
};

type Props = {
  tasks: Task[];
  deleteTask: (id: number) => void;
};

export const TaskList = ({ tasks, deleteTask }: Props) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={deleteTask} />
      ))}
    </ul>
  );
};
