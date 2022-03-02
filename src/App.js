import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import logo from './todo-logo.png';

function App() {
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
            <TodoForm />

            
            {/* Create todo form end */}

            {/* Todo list Table start */}
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
                        <tr>
                            <td>1</td>
                            <td>gh</td>
                            <td>bhj</td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                       
                        <tr>
                            <td>2</td>
                            <td>Free Freshness</td>
                            <td>gvvvvvkvjvjk</td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Todo list Table end */}

        </div>
        {/* Content end */}
    </div>

  );
}

export default App;
