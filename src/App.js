import React, { useState } from 'react';
import './App.css';


function Todo({ todo, index, completeTodo, removeTodo }) { 
  return ( 
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}
    >
      <div>
      <button onClick={() => completeTodo(index)}>Complete</button>
      </div> 
      {todo.text}
      <div> 
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  );
}


function TodoForm({ addTodo }) { 
  const [value, setValue] = useState("");

  const handleSubmit = e => { 
    e.preventDefault();
    if(!value) return; 
    addTodo(value); 
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-input">
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      </div>
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([ 
      { text: "Learn about React", 
        isCompleted: false
      }, 
      { text: "Meet friend for lunch",
        isCompleted: false 
      }, 
      { text: "Build really cool todo app", 
        isCompleted: false
      }
    ]);

  const addTodo = text => { 
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => { 
    const newTodos = [...todos]; 
    newTodos[index].isCompleted = true; 
    setTodos(newTodos);

  }; 

  const removeTodo = index => { 
    const newTodos = [...todos]; 
    newTodos.splice(index, 1); 
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
          <p className="todo-title">Todo</p>
          {todos.map((todo, index) => (
            <Todo 
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={ addTodo } />
      </div>
    </div>
  );
}

export default App;
