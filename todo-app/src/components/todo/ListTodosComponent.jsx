import React, { Component } from "react";

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: [
                { id: 1, description: 'Learn React', done: false, targetDate: new Date() },
                { id: 2, description: 'Stay Home', done: false, targetDate: new Date() },
                { id: 3, description: 'Learn Python', done: false, targetDate: new Date() },
                { id: 4, description: 'Exercise', done: false, targetDate: new Date() }
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className='container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todo.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTodosComponent