import { useEffect, useState } from "react"
import "./index.css"
export default function App(){ 
 const [newItem,setNewItem] = useState("")
 const [todos, setTodo]=useState([])
 
 function handleSumbit(e)
 {
  e.preventDefault()

  setTodo(currentTodos => {
    return[
      ...currentTodos,
      {
        id: crypto.randomUUID(),title: newItem,completed:false},
      
    ]
  })
      setNewItem("")

 }
   function toggleTodo(id,completed)
   {
     setTodo(currentTodos =>
    {
       return currentTodos.map(todo => {
        if(todo.id === id)
        {
          return { ...todo, completed}
        }

      })
    })
   }
     function deleteTodo(id){
      setTodo(currentTodos =>{
        return currentTodos.filter(todo => todo.id !== id)
      }
        )
     }
  return(
  <>
     <form onSubmit={handleSumbit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">Enter Item :</label>
        <input value={newItem} onChange={e => setNewItem(e.target.value)}  type="text" id="item" />
      </div>
      <button className="btn">add</button>
    </form>
    <h1 className="header">TODO-LIST</h1>
    <ul className="list">
      {todos.length ===0 && "NO TODOS"}
      {todos.map(todo =>{
       return <li key={todo.id}>
        <label>
          <input type="checkbox" checked={todos.completed}
           onChange={e=> toggleTodo(todo.id,e.target.checked)}
           />
           {todo.title}
        </label>
        
        <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">DELETE</button>
      </li>
      })}
    </ul>
</>
  )
}