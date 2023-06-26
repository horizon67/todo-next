import type { Task } from 'openapi/types/api';
import React from 'react';

import { TaskItem } from './TaskItem';

type Props = {
  tasks: Task[];
  onDelete: (id: number) => void;
};

export const getTaskClassName = (state?: string) => {
  if (state === 'doing') {
    return 'bg-blue-200';
  }

  return '';
};

export const TaskList = ({ tasks, onDelete }: Props) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            className={getTaskClassName(task.state)}
          />
        ))}
      </ul>
    </div>
  );
};
