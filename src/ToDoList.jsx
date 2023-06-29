import React from 'react';
import ToDo from './ToDo';
import { MdOutlineCleaningServices } from 'react-icons/md';

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
          <div key={Math.random()}>
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
        style={{ width: '100%', background: '#503eaf', color: 'white' }}
        onClick={handleFilter}
      >
        Clear Finished Tasks <MdOutlineCleaningServices />
      </button>
    </div>
  );
};

export default ToDoList;
