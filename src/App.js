import { useState } from 'react'
// allows use of State without class-based components
import Header from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"
// brings in our components files from the components folder
function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      item: "Drink Water",
    },
    {
      id: 2,
      item: "Make Healthy Dinner",
    },
    {
      id: 3,
      item: "Exercise",
    },
  ]);
  // ^ this is global state: the base level starting point for the initial state
  // useState is a React hook that uses array destructuring
  // todos is state, setTodos changes state

  const addTodo = (todo) => {
    const id = Math.ceil(Math.random()*100000)
    // raindomly assigns a random id
    const newTodo = {id, ...todo}
    // why is a spread operator used above? typo?
    // newTodo takes the randomly generated id and pairs it with the todo item
    setTodos([...todos, newTodo])
    // Uses spread operator to put new todo at the end of the array
  }

  return (
    <div className="container">
      <Header title="Todo List" />
      // header component to render out the header
      // title is the prop (passed into the header component eventually)
      // if you changed the title "Todo List", that new string would show in the browser
      <AddTodo onAdd={addTodo} />
      // AddTodo component to render out
      <List todos={todos}/>
      // list component for rendering the List
      // passing todos into list component. the state is useState
      // inside the list component are the todo components
    </div>
  );
}

export default App;
