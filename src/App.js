import React, {Component} from 'react';
import Todos from './ToDos';
import AddTodo from './AddForm'

class App extends Component {
  state = {
    todos: [
       {id: 1, content: 'buy some milk'},
       {id: 2, content: 'do some work'}
      ]
  }

  deleteToDo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    this.id = Math.random()
    //spread operator to get each individual item from todos list ...
    //, we are creating a new array and we are dumping the content of existing todos array
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className = "todo-app container">
        <h1 className = 'center blue-text'>Todo's</h1>
        <Todos todos= {this.state.todos} deleteToDo = {this.deleteToDo}/>
        <AddTodo addTodo = {this.addTodo}></AddTodo>
      </div>
    )
  }
}

export default App;
