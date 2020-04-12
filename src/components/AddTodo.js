import React from 'react';
const AddTodo = (props) => {

    const submitTodo = (e) => {
        e.preventDefault();
        props.addTodo();
    }

    return (
        <div>
            Add To Do
            <form onSubmit={submitTodo}>
                <input
                 type="text" 
                 name={props.name}
                 value={props.value}
                 onChange={props.onChange}
                 />    
            </form>
        </div>
    )
}

export default AddTodo;