import Header from './components/Header';
import Button from './components/Button';
import { useState } from 'react';
import Task from './components/Task';
import AddTask from './components/AddTask';

function App() {
    const [show, setshow] = useState(false)

    const [tasks, setTasks] = useState([
        {
            id: 1,
            task: "hello",
            time: "1",
        },
        {
            id: 2,
            task: "world",
            time: "2",
        }
    ])

    const click = () => {
        setshow(!show)
    }
    const addTask = (task) => {
        const id = Math.floor(Math.random) + 1;
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }

    return (
        <div>
            <div className="container">
                <div className='header'>
                    <Header title="Todo-list" color="black" />
                    {show ? <Button text="close" color="red" click={click} /> : <Button text="Add" click={click} />}
                </div>
                {show ? <AddTask addTask={addTask}/> : ''}
                {
                    tasks.map((task) => (
                        <Task key={task.id} text={task.task} time={task.time}/>
                    ))
                }
            </div>
        </div>
    );
}

export default App;