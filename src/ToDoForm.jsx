import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    console.log('Input', userInput);
    setUserInput('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Add new item..."
      />
      <button style={{ margin: '20px', background: 'green', color: 'white' }}>
        Submit
      </button>
    </form>
  );
};

export default ToDoForm;
