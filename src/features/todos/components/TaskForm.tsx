import React, { useState } from 'react';

type Props = {
  onCreateTask: (content: string) => void;
};

export const TaskForm = ({ onCreateTask }: Props) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content) {
      onCreateTask(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 flex">
        <input
          className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          type="text"
          placeholder="Add new task"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="ml-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};
