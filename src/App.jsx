import './App.css';
import data from '../src/data.json';
import React, { useState } from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggleTaskComplete = (id) => {
    let todoListWithTargetTaskToggled = toDoList.map((task) => {
      if (Number(id) === task.id) {
        return { ...task, complete: !task.complete };
      } else {
        return { ...task };
      }
    });
    setToDoList(todoListWithTargetTaskToggled);
  };

  const handleDeleteATodo = (id) => {
    let todoListWithTargetTaskDeleted = toDoList.filter((todo) => {
      if (Number(id) === todo.id) {
        return false;
      } else {
        return true;
      }
    });
    // console.log('Our filtered todos', todoListWithTargetTaskDeleted);
    setToDoList(todoListWithTargetTaskDeleted);
  };

  const handleClearCompleted = () => {
    let uncompletedTasks = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(uncompletedTasks);
  };

  const addTaskToGlobalTodos = (userInput) => {
    const todoListWithNewItem = [
      ...toDoList,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(todoListWithNewItem);
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggleTaskComplete}
        handleFilter={handleClearCompleted}
        handleDeleteATodo={handleDeleteATodo}
      />
      <ToDoForm addTask={addTaskToGlobalTodos} />
    </div>
  );
}

export default App;
