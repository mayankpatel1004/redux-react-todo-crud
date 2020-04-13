//Don't forgot to execute following command //
//npm install --save redux react-redux redux-thunk

import React,{useState} from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import {connect} from 'react-redux';
import * as actions from './store/actions';

function App(props) {
  console.log("App method props ------->",props);
  const [todo,setTodo] = useState("");
  const addTodo = () => {
    const todoObj = {
      id : Math.random(),
      todo:todo,
      isCompleted: false
    }
    props.addTodo(todoObj);
    setTodo('');
  }

  return (
    <div className="App">
      {console.log("APP===>",props)}
      <TodoList />
      {/* <AddTodo
        name="todo"
        value={todo}
        onChange={(e) => {
        console.log(e.target.value);
        setTodo(e.target.value)
      }}
      /> */}

      <AddTodo
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value) }
        addTodo = {addTodo}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  console.log("Dispatch to props ====>",dispatch);
  return {
    addTodo:(todoObj) => dispatch(actions.addTodo(todoObj))
  }
}
const connectedComponent = connect(null,mapDispatchToProps);
export default connectedComponent(App);