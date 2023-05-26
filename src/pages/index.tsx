import React, { useState } from 'react';

import { TaskList } from '../features/todos/components/TaskList';

const IndexPage = () => {
  const [tasks, setTasks] = useState<{ id: number; content: string }[]>([]);
  const [content, setcontent] = useState('');

  const addTask = () => {
    setTasks([...tasks, { id: tasks.length, content }]);
    setcontent('');
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <h1 className="mb-4 text-2xl">Task App</h1>
      <div className="mb-4 flex">
        <input
          className="mr-2 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          type="text"
          placeholder="New Task"
          value={content}
          onChange={(e) => setcontent(e.target.value)}
        />
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default IndexPage;
