import React from 'react';
import { BsTrash3 } from 'react-icons/bs';

const ToDo = ({ todo, handleToggle, handleDeleteATodo }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  const handleDeleteItem = (e, todoId) => {
    e.preventDefault();
    handleDeleteATodo(todoId);
  };

  return (
    <div className="items">
      <div
        id={todo.id}
        name="todo"
        value={todo.id}
        onClick={handleClick}
        className={todo.complete ? 'todo strike' : 'todo'}
      >
        {todo.task}
      </div>
      <button
        style={{
          padding: '10px',
          color: 'darkred',
          fontWeight: 'bolder',
          background: 'transparent',
        }}
        type="button"
        onClick={(e) => handleDeleteItem(e, todo.id)}
        // onClick={handleDeleteItem}
      >
        <BsTrash3 />
      </button>
    </div>
  );
};

export default ToDo;
