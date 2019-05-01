import React from 'react';
import '../App.css';

const Todo = ({ todo }) => 
        <div className="todo">
            {todo.text}
        </div>;


export default Todo; 