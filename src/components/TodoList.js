import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo,updateTodo} from '../store/actions';


const TodoList = (props) => {
    return (
        <div>
            To Do List
            {/* {JSON.stringify(props.todos)} */}
            <ul>
                {props.todos.length > 0 ? 
                props.todos.map((todo) => 
                <li 
                    style={{textDecoration:todo.isCompleted?'line-through':'none'}}
                    key={todo.id} onClick={() =>props.updateTodo(todo.id)}>
                    {todo.id} - {todo.todo}
                    <button onClick={() =>props.deleteTodo(todo.id)}>X</button>
                </li>
                )
                :null}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        todos:state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return{
        deleteTodo: (id) => dispatch(deleteTodo(id)),
        updateTodo: (id) => dispatch(updateTodo(id))
    }
}

const connectedComponent = connect(mapStateToProps,mapDispatchToProps);

export default connectedComponent(TodoList);