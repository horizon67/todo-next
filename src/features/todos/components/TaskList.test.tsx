// .TaskList.tsxのテストコードを書く
import { render, screen } from '@testing-library/react';
import type { Task } from 'openapi/types/api';
import React from 'react';

import { getTaskClassName, TaskList } from './TaskList';

// テストデータとして使用するタスクリスト
const tasks: Task[] = [
  { id: 1, content: 'Task 1', state: 'new' },
  { id: 2, content: 'Task 2', state: 'doing' },
  { id: 3, content: 'Task 3', state: 'done' },
];

// ダミーのonDelete関数
const deleteTask = jest.fn();

test('TaskList renders correctly', () => {
  render(<TaskList tasks={tasks} onDelete={deleteTask} />);

  // タスクリストの要素が正しくレンダリングされたことを検証
  const taskListElement = screen.getByRole('list');
  expect(taskListElement).toBeInTheDocument();

  // タスクアイテムが正しい数だけレンダリングされたことを検証
  const taskItemElements = screen.getAllByRole('listitem');
  expect(taskItemElements).toHaveLength(tasks.length);
});

// ./TaskList.tsxのgetTaskClassName関数のtest
test('getTaskClassName returns correct className', () => {
  expect(getTaskClassName('new')).toBe('');
  expect(getTaskClassName('doing')).toBe('bg-blue-200');
  expect(getTaskClassName('done')).toBe('');
});

afterEach(() => {
  jest.clearAllMocks();
});
