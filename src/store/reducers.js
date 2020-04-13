const initState = {
    name:'Mayank Patel',
    todos : [
        {id:1,todo: 'Mayank1 Patel',isCompleted:false},
        {id:2,todo: 'Mayank2 Patel',isCompleted:false},
        {id:3,todo: 'Mayank3 Patel',isCompleted:false},
    ]
};
const rootReducer = (state = initState,actions) => {
    let todos,updatedTodos;
    switch(actions.type){
        case 'ADD_TODO':
            state = {
                ...state,
                todos:[...state.todos,actions.todo]
            }
        break;
        case 'DELETE_TODO':
            todos = state.todos;
            updatedTodos = todos.filter(todo => todo.id !== actions.id);
        state = {
            ...state,
            todos: updatedTodos
        }
        break;
        case 'UPDATE_TODO':
            todos = state.todos;
            updatedTodos = todos.map(todo => todo.id === actions.id ? {...todo,isCompleted:true} : todo)
        state = {
            ...state,
            todos:updatedTodos
        }
        break;
    }
    return state;
}
export default rootReducer;