import Todo from './Todo'

const List = ({ todos }) => {
  // todos came from state
  // destructuring ^ curly braces replace props.todo / props.title etc.
    return (
        <div>
          {todos.map((todo) =>
            <Todo key={todo.id} todo={todo} />
            // mapping through the todos (three of them) and creating a todo component for each one
          )}
        </div>
    )
}

export default List
