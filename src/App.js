
import {useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoTable from './components/TodoTable/TodoTable';
import logo from './todo-logo.png';

function App() {

    const [data, setData] = useState([]);

    const addTodo = (newTodo) => {
        setData([...data, newTodo]);
    }


  return (
    <div id="todo-app">
      

        {/* Header start */}
        <div id="header">
            <img src={logo} alt="todo logo" />
            <ul>
                <li>Home</li>
                <li>Menu_item_1</li>
                <li>Menu_item_2</li>
                <li>Disabled</li>
            </ul>
        </div>
        {/* Header end */}


        {/* Content start */}
        <div id="contents">


            <div id="todo-title">
                <h2>Todo List</h2>
            </div>
            
            {/* Create todo form */}
            <TodoForm  addTodo={addTodo} />

            
            {/* Create todo form end */}

            
            {/* Todo list Table start */}

            <TodoTable data={data} />

            {/* Todo list Table end */}

        </div>
        {/* Content end */}
    </div>

  );
}

export default App;
