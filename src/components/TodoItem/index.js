// Write your code here
import './index.css'

const TodoItem = props => {
  const {TodosListItem, deleteTodo} = props
  const {id, title} = TodosListItem

  const deleteTodoItem = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item-container">
      <p className="title-name">{title}</p>
      <button className="button" onClick={deleteTodoItem} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
