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
        if (task === "") {
            alert("El campo de tarea no puede quedar vacío");
        } else {
            setPendingTasks([task, ...pendingTasks]);

            clearForm();
        }
    };

    const handleCompleteTask = (index) => {
        let taskToComplete = pendingTasks[index];
        setCompletedTasks([taskToComplete, ...completedTasks]);

        handleDeleteTask(index, 1);
    };

    const handleDeleteTask = (index, taskList) => {
        let temp = [];

        if (taskList === 1) {
            temp = [...pendingTasks];
            temp.splice(index, 1);

            setPendingTasks(temp);
        } else {
            temp = [...completedTasks];
            temp.splice(index, 1);

            setCompletedTasks(temp);
        }
    };

    return (
        <div className="home">
            <h1 className="title">Lista de tareas</h1>

            <form className="form-container">
                <Input
                    type="text"
                    title="Escribe una nueva tarea"
                    name="inpt-task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <Button type="button" text="Agregar" onClick={handleAddTask} />
            </form>

            <ul className="tasks-container">
                <h2 className="title-task-container">Tareas pendientes</h2>

                {pendingTasks.length > 0 ? (
                    pendingTasks.map((task, index) => {
                        return (
                            <li key={index} className="task-element">
                                <p>{task}</p>

                                <div className="actions-container">
                                    <Button
                                        text="Completar"
                                        onClick={() =>
                                            handleCompleteTask(index)
                                        }
                                    />
                                    <Button
                                        text="Eliminar"
                                        onClick={() =>
                                            handleDeleteTask(index, 1)
                                        }
                                    />
                                </div>
                            </li>
                        );
                    })
                ) : (
                    <p>Aún no tienes tareas pendientes</p>
                )}
            </ul>

            <ul className="tasks-container">
                <h2 className="title-task-container">Tareas completadas</h2>

                {completedTasks.length > 0 ? (
                    completedTasks.map((task, index) => {
                        return (
                            <li key={index} className="task-element">
                                <p className="task-txt-completed">{task}</p>

                                <div className="actions-container">
                                    <Button
                                        text="Eliminar"
                                        onClick={() =>
                                            handleDeleteTask(index, 2)
                                        }
                                    />
                                </div>
                            </li>
                        );
                    })
                ) : (
                    <p>Aún no tienes tareas completadas</p>
                )}
            </ul>
        </div>
    );
}

export default Home;
