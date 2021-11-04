import React, { useState } from 'react';

let todoId = 0;

const Input = () => {
    const [todo, setTodo] = useState('');
    const [newTodo, setNewTodo] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setNewTodo(oldTodos => {
            setTodo('')
            return [...oldTodos, {task : todo, id: todoId++ }];
        })
    }
    const handleDelete = (ids) => {
        // console.log('deleted', index);
        // const newTodos = newTodo.filter(tds => tds.id !== index);
        // setNewTodo(newTodos);
        setNewTodo(oldTodos => oldTodos.filter(tds => tds.id !== ids));
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="please a enter a todo"></input>
                <button type="submit">Add</button>
            </form>

            {
                newTodo.map((td) => {
                return <div>
                    <p key={td.id}>{td.task}</p>
                    <button onClick={() => handleDelete(td.id)}>delete</button>
                    </div>
                })
            }
        </div>
    );
};

export default Input;