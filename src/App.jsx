import React, {useState, useRef, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import {ToDoList} from './components/ToDoList/ToDoList';
import './App.css'

const KEY = 'todoApp.todos';

export function App(){
  const [todos, setTodos] = useState([
    {id:1, task:"Tarea 1", completed:false},
  ]);
  
  const ToDoTaskRef = useRef();
  
  useEffect (() => {
    const storedToDos = JSON.parse(localStorage.getItem(KEY));
    if(storedToDos) {
      setTodos(storedToDos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos))
  }, [todos]);

  const toggleToDo= (id) => {
    const newToDos = [...todos];
    const todo = newToDos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newToDos);
  }

  const handleToDoAdd = () => {
    const task = ToDoTaskRef.current.value;
    if(task === "") return;

    setTodos((prevToDos) => {
      return [...prevToDos, {id: uuidv4(), task, completed: false}]
    })

    ToDoTaskRef.current.value = null;
  };

  const handleClearAll = () => {
    const newToDos = todos.filter((todo) => !todo.completed)
    setTodos(newToDos);
  }

  return (
    <div className='App1'>
      <div className='title'>Lista de Tareas</div>
      <ToDoList todos= {todos} toggleToDo={toggleToDo} />
      <input className='inputTask' ref={ToDoTaskRef} type="text" placeholder="Escribir tarea"></input>
      <button className='btnAdd' onClick={handleToDoAdd}>+</button>
      <button className='btnClean' onClick={handleClearAll}>x </button>
      <div className='cant'> Quedan {todos.filter((todo) => !todo.completed).length} tareas</div>
    </div>

  );
};
