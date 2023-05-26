import React, { useState } from 'react';

type Props = {
  onSubmit: (content: string) => void;
};

export const TaskForm = ({ onSubmit }: Props) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) {
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <div className="mb-4 flex">
      <input
        className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        type="text"
        placeholder="Add new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="ml-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
};
