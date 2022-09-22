import React, { useState } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default function AppFunction() {
    // hook your code up here ;)
    const [newTask, setNewTask] = useState({});
    const [allTasks, setAllTasks] = useState([]);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setNewTask((prevNewTask) => ({
            ...prevNewTask,
            [name]: value,
            id: Date.now()
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newTask.name) return;
        
        const taskIndex = allTasks.findIndex((task) => task.name === newTask.name);
        if (taskIndex !== -1) {
            setAllTasks((prevAllTasks) => ([
                ...prevAllTasks.slice(0, taskIndex),
                newTask,
                ...prevAllTasks.slice(taskIndex + 1)
            ]));
        } else {
            setAllTasks((prevAllTasks) => [newTask, ...prevAllTasks]);
        setNewTask({});
    }

    const handleDelete = (taskIdToRemove) => {
        setAllTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskIdToRemove));
    }

    return (
        <main>
            <div>
                <div>
                    <p>My Event</p>
                    <p>{myEvent}</p>
                </div>
                <div>
                    <p>My Index</p>
                    <p>{myIndex}</p>
                </div>
            </div>
            <h1>Tasks</h1>
            <NewTask
                newTask={newTask}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <TasksList
                allTasks={allTasks}
                handleDelete={handleDelete}
            />
        </main>
    );
}
