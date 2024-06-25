import { useState } from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";

import "./Home.css";

function Home({}) {
    const [task, setTask] = useState("");

    const [pendingTasks, setPendingTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const clearForm = () => {
        setTask("");
    };

    const handleAddTask = () => {
        setPendingTasks([...pendingTasks, task]);

        clearForm();
    };

    const handleCompleteTask = () => {};

    const handleDeleteTask = () => {};

    return (
        <div className="home">
            <h1 className="title">Lista de tareas</h1>

            <div className="form-container">
                <Input
                    type="text"
                    title="Escribe una nueva tarea"
                    name="inpt-task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    required
                />

                <Button text="Agregar" onClick={handleAddTask} />
            </div>

            <ul className="in-process-container">
                <h2 className="title-task-container">Tareas pendientes</h2>

                {pendingTasks.map((task, index) => {
                    return (
                        <li key={index} className="task-element">
                            <p>{task}</p>

                            <div className="actions-container">
                                <Button
                                    text="Completar"
                                    onClick={() => handleCompleteTask(index)}
                                />
                                <Button
                                    text="Eliminar"
                                    onClick={() => handleDeleteTask(index)}
                                />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Home;
