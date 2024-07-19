import './index.css'

const TodoItem = ({todo, toggleEditTodo, toggleCompletion, deleteTodo}) => {
  const {id, title, isEdit, isCompleted} = todo

  return (
    <li className="todo-item-container">
      <div className="todo-details">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => toggleCompletion(id)}
        />
        {isEdit ? (
          <input type="text" value={title} className="todo-edit-input" />
        ) : (
          <p className={`title-name ${isCompleted ? 'completed' : ''}`}>
            {title}
          </p>
        )}
      </div>

      <div className="todo-actions">
        {isEdit ? (
          <button
            className="button save-button"
            onClick={() => toggleEditTodo(id)}
          >
            Save
          </button>
        ) : (
          <button
            className="button edit-button"
            onClick={() => toggleEditTodo(id)}
          >
            Edit
          </button>
        )}
        <button className="button delete-button" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
