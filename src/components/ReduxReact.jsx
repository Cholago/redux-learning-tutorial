//Main link react with redux component
import React from 'react';
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import Todo from './Todo'

const mapStateToProps = state => ({
    todos: state.todos
})

const ReactRedux = ({ todos }) => {
    console.log(todos);
    return (
        <div className="container">
            <h1 className="text-center" >Redux tutorial</h1>
            <AddTodo />
            <ul>
                {todos.map(todo => <Todo key={todo.id} todoData={todo} />)}
            </ul>
        </div>
    );
}
export default connect(mapStateToProps)(ReactRedux)