import React from 'react';

import type { Task } from '../../../../openapi/types/api';

type Props = {
  task: Task;
  onDelete: (id: number) => void;
  className?: string;
};

export const TaskItem = ({ task, onDelete, className }: Props) => {
  const handleDelete = () => {
    onDelete(task.id || 0);
  };

  return (
    <li className={`mb-2 flex justify-between border p-2 ${className}`}>
      <span>{task.content}</span>
      <button
        className="rounded bg-red-500 px-2 py-1 font-bold text-white hover:bg-red-700"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};
