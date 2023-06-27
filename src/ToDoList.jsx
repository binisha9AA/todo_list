import React from 'react';
import ToDo from './ToDo';
import { BsEraser } from 'react-icons/bs';

const ToDoList = ({
  toDoList,
  handleToggle,
  handleFilter,
  handleDeleteATodo,
}) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <div key={todo.id}>
            <ToDo
              todo={todo}
              handleToggle={handleToggle}
              handleFilter={handleFilter}
              handleDeleteATodo={handleDeleteATodo}
            />
          </div>
        );
      })}
      <button
        style={{ margin: '20px', background: '#503eaf', color: 'white' }}
        onClick={handleFilter}
      >
        Clear Finished Tasks <BsEraser />
      </button>
    </div>
  );
};

export default ToDoList;
