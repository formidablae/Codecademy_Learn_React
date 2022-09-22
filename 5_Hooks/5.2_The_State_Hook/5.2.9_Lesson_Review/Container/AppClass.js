import React, { Component } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask: {},
            allTasks: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange({ target }) {
        const { name, value } = target;
        this.setState((prevState) => ({
            ...prevState,
            newTask: {
                ...prevState.newTask,
                [name]: value,
                id: Date.now()
            }
        }));
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.newTask.title) return;
        this.setState((prevState) => ({
            allTasks: [prevState.newTask, ...prevState.allTasks],
            newTask: {}
        }));
    }

    handleDelete(taskIdToRemove) {
        this.setState((prevState) => ({
            ...prevState,
            allTasks: prevState.allTasks.filter((task) => task.id !== taskIdToRemove)
        }));
    }

    render() {
        return (
            <main>
                <h1>Tasks</h1>
                <NewTask
                    newTask={this.state.newTask}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <TasksList
                    allTasks={this.state.allTasks}
                    handleDelete={this.handleDelete}
                />
            </main>
        );
    }
}
