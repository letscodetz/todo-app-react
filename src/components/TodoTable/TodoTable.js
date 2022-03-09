
import { useState } from 'react';

function TodoTable(props) {
    const { data, deleteTodo } = props;



    const displayTodo = () => data.map((todo, i) => {
        return (
            <tr key={i}>
                <td>{i + 1}</td>
                <td>{todo.task}</td>
                <td>{todo.description}</td>
                <td>
                    <button onClick={() => deleteTodo(i)}>Delete</button>
                </td>
            </tr>
        );
    });

    return (

        <div id="todo-list-table">
            <table>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Task</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {displayTodo()}
                </tbody>
            </table>
        </div>

    );
}

export default TodoTable;