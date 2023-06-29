import './App.css';
import React, { useState } from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { useEffect } from 'react';
import { toggleComplete } from './helpers/todo.helper';
import { handleDeleteATodoFromDatabase } from './helpers/todo.helper';
import { addTodosItem } from './helpers/todo.helper';
import { clearTodosFromDatabase } from './helpers/todo.helper';

function App() {
  async function fetchTodos() {
    const response = await fetch('http://localhost:3000/todos');
    const todosAsJson = await response.json();
    setToDoList(todosAsJson);
  }

  useEffect(() => {
    fetchTodos();
    return () => {};
  }, []);

  const [toDoList, setToDoList] = useState([]);

  const handleToggleTaskComplete = (id) => {
    let todoListWithTargetTaskToggled = toDoList.map((task) => {
      if (Number(id) === task.id) {
        toggleComplete(id, task.complete);
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
        handleDeleteATodoFromDatabase(id);
        return false;
      } else {
        return true;
      }
    });
    // console.log('Our filtered todos', todoListWithTargetTaskDeleted);
    setToDoList(todoListWithTargetTaskDeleted);
  };

  const handleClearCompleted = (id, status) => {
    let uncompletedTasks = toDoList.filter((task) => {
      return !task.complete;
    });
    let completedTasks = toDoList.filter((task) => {
      return task.complete;
    });
    const completedTaskIds = completedTasks.map((singleCompletedTask) => {
      return singleCompletedTask.id;
    });
    // console.log(completedTaskIds);
    clearTodosFromDatabase(completedTaskIds);
    setToDoList(uncompletedTasks);
  };

  const addTaskToGlobalTodos = (userInput) => {
    const todoListWithNewItem = [
      ...toDoList,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    addTodosItem(Math.random(), userInput, false);
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
