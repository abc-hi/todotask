import React, { useEffect } from 'react';
import InputComponent from './component/InputComponent';
import { useState } from 'react';
import Tododisplay from './component/Tododisplay';
// import { useEffect } from 'react';
import Filter from './component/Filter';


const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState([]);
  const[view,setView]=useState('all')

  // Function to add a new todo
  const addTodo = (name, title) => {
    const newTodo = { id: todos.length + 1, name, title, status: 'pending' };
    setTodos([...todos, newTodo]);
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };function changeView(e){
    setView(e.target.value)
  }
  useEffect(()=>{
    if(view==='all')
    {
      setFilter(todos)
    }
    if(view==='completed'){
      setFilter(todos.filter((todo)=>todo.completed === true))
    }
    if(view==='pending'){
      setFilter(todos.filter((todo)=>todo.completed===false))
    }
  },[view,todos])

  // Function to toggle the status of a todo
  const toggleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: todo.status === 'pending' ? 'completed' : 'pending' } : todo
      )
    );
  };

  // Function to filter todos based on status
  // const filteredTodos = todos.filter(todo => todo.status === filter );
  console.log(todos)

  return (
    
    <div className="row" style={{border: '1px solid black'}}>

      <InputComponent addTodo={addTodo} />
      {/* <select onChange={()=>{set}}>
        <option>completed</option>
        <option>pending</option>
        <option>all</option>
      </select> */}
      {/* <Filter setFilter={setFilter} /> */}
      <Filter view={view} changeView={changeView} />
      <div className="row">
      

    
      {todos.map((todo) => {
        if (view === 'all') {
          return(
            <Tododisplay
          {...todo}
          key={todo.id}
          todo={todo} 
          deleteTodo={deleteTodo} 
          toggleStatus={toggleStatus}
          />
        )
         
        } else if (view === 'completed' && todo.status=="completed") {
        
          return(
            <Tododisplay
          {...todo}
          key={todo.id}
          todo={todo} 
          deleteTodo={deleteTodo} 
          toggleStatus={toggleStatus}
          />
        )
        } else if (view === 'pending' && todo.status=="pending") {
          return(
            <Tododisplay
          {...todo}
          key={todo.id}
          todo={todo} 
          deleteTodo={deleteTodo} 
          toggleStatus={toggleStatus}
          />
        )
        }
        
        // <Tododisplay key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleStatus={toggleStatus} />
})}
    </div></div>
  );
};

export default App;
