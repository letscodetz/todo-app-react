import {useState} from 'react';


function TodoForm() {
    const [task,setText] = useState('');
    const [description,setDescription] = useState('');

    const handleOnTextChange = (e) => setText(e.target.value);

    const handleOnDescriptionChange = (e) => setDescription(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('task', task);
        console.log('description', description);
    }

    return (

        <div>
            <form id="todo-form" onSubmit={handleSubmit}>
                <div className="todo-form-item">
                    <label>Task</label>
                    <input onChange={handleOnTextChange} type="text" />
                </div>

                <div className="todo-form-item">
                    <label>Description</label>
                    <textarea onChange={handleOnDescriptionChange} rows="5"></textarea>
                </div>

                <input type="submit" value="Add Item" />


            </form>

        </div>

    );
}

export default TodoForm;