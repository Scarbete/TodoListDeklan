import classes from "../../App.module.css"
import React from 'react'

export default function TodoList({ todos, deleteTodo }) {

    return (
        <>
            {todos.map((item) =>
                <div className={item.completed
                    ? `${classes.todoCard} ${classes.completed}`
                    : `${classes.todoCard} ${classes.notCompleted}`}
                     key={item.id}
                >
                    <h2>ID: {item.id}</h2>
                    <h2>Name: {item.title}</h2>
                    <h2>Completed: {item.completed ? 'true' : 'false' }</h2>
                    <button onClick={() => deleteTodo(item.id)}>Delete</button>
                </div>
            )}
        </>
    )
}