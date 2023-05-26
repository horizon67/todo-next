import React from 'react';

import type { Task } from './TaskList';

type Props = {
  task: Task;
  onDelete: (id: number) => void;
};

export const TaskItem = ({ task, onDelete }: Props) => {
  return (
    <li className="mb-2 flex justify-between border p-2">
      <span>{task.content}</span>
      <button
        className="rounded bg-red-500 px-2 py-1 font-bold text-white hover:bg-red-700"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </li>
  );
};
