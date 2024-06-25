import { useState } from 'react';

import Input from '../Input/Input';

import './Home.css';

function Home({}) {
    const [task, setTask] = useState("");

    return (
        <div className="home">
            <h1 className='title'>Lista de tareas</h1>
            <Input type="text"
                title="Escribe una nueva tarea"
                name="inpt-task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
            />
        </div>
    );
}

export default Home;