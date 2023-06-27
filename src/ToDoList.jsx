import React from 'react';
import ToDo from './ToDo';
import { BsTrash3 } from 'react-icons/bs';

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <div key={todo.id}>
            <ToDo
              todo={todo}
              handleToggle={handleToggle}
              handleFilter={handleFilter}
            />
          </div>
        );
      })}
      <button
        style={{ margin: '20px', background: '#503eaf', color: 'white' }}
        onClick={handleFilter}
      >
        Delete <BsTrash3 />
      </button>
    </div>
  );
};

export default ToDoList;
