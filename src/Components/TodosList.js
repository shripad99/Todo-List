import React from 'react';

const TodosList = ({ todos, setTodos, setEdit }) => {
    const handleCompleted = (todo) => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return { ...item, completed: !item.completed }
            }
            return item;
        }))
    }
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEdit(findTodo);
    }
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    return (
        <div>
            {todos.map((todo) => (
                <li className='list-item' key={todo.id}>
                    <input type='text' value={todo.title} className="list" onChange={(e) => e.preventDefault()}></input>
                    <button className='button-complete task-button' onClick={() => handleCompleted(todo)}><i className='bx bx-check-square'></i></button>
                    <button className='button-edit task-button' onClick={() => handleEdit(todo)}><i className='bx bxs-edit'></i></button>
                    <button className='button-delete task-button' onClick={() => handleDelete(todo)}><i className='bx bx-trash-alt'></i></button>
                </li>
            ))}
        </div>
    )
};

export default TodosList