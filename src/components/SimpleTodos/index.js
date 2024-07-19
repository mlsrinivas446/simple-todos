import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    isEdit: false,
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    isEdit: false,
    isCompleted: false,
  },
  {
    id: 3,
    title: 'movie night',
    isEdit: false,
    isCompleted: false,
  },
  {
    id: 4,
    title: 'Rent the movie',
    isEdit: false,
    isCompleted: false,
  },
  {
    id: 5,
    title: 'the movie for tomorrow',
    isEdit: false,
    isCompleted: false,
  },
  {
    id: 6,
    title: 'tomorrow movie night',
    isEdit: false,
    isCompleted: false,
  },
  {
    id: 7,
    title: 'Rent',
    isEdit: false,
    isCompleted: false,
  },
  {
    id: 8,
    title: 'movie night',
    isEdit: false,
    isCompleted: false,
  },
]

class SimpleTodos extends Component {
  state = {TodoList: initialTodosList, inputText: '', inputNum: 0}

  handleInputChange = event => {
    this.setState({inputText: event.target.value})
  }

  handleInputNumChange = event => {
    this.setState({inputNum: parseInt(event.target.value)})
  }

  addTodo = event => {
    event.preventDefault()
    const {inputText, inputNum} = this.state

    this.setState(prevState => {
      const {TodoList} = prevState
      const length = TodoList.length
      let newTodoList = [...TodoList]

      if (inputNum > 0) {
        for (let i = 0; i < inputNum; i++) {
          newTodoList = [
            ...newTodoList,
            {
              id: length + i + 1,
              title: inputText,
              isEdit: false,
              isCompleted: false,
            },
          ]
        }
      } else {
        newTodoList = [
          ...newTodoList,
          {
            id: length + 1,
            title: inputText,
            isEdit: false,
            isCompleted: false,
          },
        ]
      }

      return {
        TodoList: newTodoList,
        inputText: '',
        inputNum: 0,
      }
    })
  }

  toggleEditTodo = id => {
    const {TodoList} = this.state
    this.setState({
      TodoList: TodoList.map(todo =>
        todo.id === id ? {...todo, isEdit: !todo.isEdit} : todo,
      ),
    })
  }

  saveTodo = (id, newTitle) => {
    const {TodoList} = this.state
    this.setState({
      TodoList: TodoList.map(todo =>
        todo.id === id ? {...todo, title: newTitle, isEdit: false} : todo,
      ),
    })
  }

  toggleCompletion = id => {
    const {TodoList} = this.state
    this.setState({
      TodoList: TodoList.map(todo =>
        todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo,
      ),
    })
  }

  deleteTodo = id => {
    const {TodoList} = this.state
    this.setState({TodoList: TodoList.filter(todo => todo.id !== id)})
  }

  render() {
    const {TodoList, inputText, inputNum} = this.state

    return (
      <div className="sample-todo-container">
        <div className="input-item-container">
          <h1 className="heading">Simple Todos</h1>
          <form onSubmit={this.addTodo} className="input-container">
            <input
              type="text"
              className="search-input"
              value={inputText}
              onChange={this.handleInputChange}
              placeholder="Enter title"
            />
            <input
              type="number"
              value={inputNum}
              onChange={this.handleInputNumChange}
              className="search-input"
              placeholder="Number of todos"
            />
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
        </div>
        <ul className="todos-container">
          {TodoList.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleEditTodo={this.toggleEditTodo}
              saveTodo={this.saveTodo}
              toggleCompletion={this.toggleCompletion}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos
