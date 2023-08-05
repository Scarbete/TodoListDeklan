import TodoList from './comp/TodoList/TodoList.jsx'
import classes from './App.module.css'
import {useState} from 'react'


export default function App() {
    const [todos, setTodos] = useState([
        {id: 1, title: 'Aesthetic', completed: false},
        {id: 2, title: 'Quasar', completed: true},
        {id: 3, title: 'Exweasy', completed: false}
    ])
    const [title, setTitle] = useState('')

    const addTodos = (event) => {
        event.preventDefault()
        const newTasks = {
            id: Date.now(),
            title: title,
            completed: false
        }
        setTodos([...todos, newTasks])
        setTitle('')
    }

    const deleteTodo = ( id ) => {
        const deletedList = todos.filter((item) => item.id !== id)
        setTodos([...deletedList])
    }

    return (
        <>
            <form onSubmit={addTodos} className={classes.addTodoForm}>
                <input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    type="text"
                    placeholder={'Enter new task'}
                />
                <button>Add new todo</button>
            </form>

            <TodoList todos={todos} deleteTodo={deleteTodo}/>
        </>
    )
}