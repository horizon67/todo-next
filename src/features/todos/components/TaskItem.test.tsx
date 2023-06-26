// .TaskItem.tsxのテストコードを書く
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { Task } from 'openapi/types/api';
import React from 'react';

import { TaskItem } from './TaskItem';

// テストデータとして使用するタスク
const task: Task = { id: 1, content: 'Task 1', state: 'new' };

// ダミーのonDelete関数
const deleteTask = jest.fn();

//
test('TaskItem renders correctly', () => {
  render(<TaskItem task={task} onDelete={deleteTask} />);

  // タスクアイテムの要素が正しくレンダリングされたことを検証
  const taskItemElement = screen.getByRole('listitem');
  expect(taskItemElement).toBeInTheDocument();

  // タスクの内容が正しくレンダリングされたことを検証
  const taskContentElement = screen.getByText(task.content);
  expect(taskContentElement).toBeInTheDocument();

  // 削除ボタンが正しくレンダリングされたことを検証
  const deleteButtonElement = screen.getByRole('button', { name: 'Delete' });
  expect(deleteButtonElement).toBeInTheDocument();
});

test('onDelete is called when delete button is clicked', () => {
  render(<TaskItem task={task} onDelete={deleteTask} />);

  // 削除ボタンをクリック
  const deleteButtonElement = screen.getByRole('button', { name: 'Delete' });
  userEvent.click(deleteButtonElement);

  // onDeleteが正しく呼び出されたことを検証
  expect(deleteTask).toHaveBeenCalledTimes(1);
  expect(deleteTask).toHaveBeenCalledWith(task.id);
});
