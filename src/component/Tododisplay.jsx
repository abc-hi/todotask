import React from 'react';

const Tododisplay = ({ todo, deleteTodo, toggleStatus }) => {
  return (

  

    //  <div className="row">
    
     <div className='col-md-4'>
       <div className="card" style={{width: '24rem',marginTop: '20px',backgroundColor:'aquamarine'}}>
     <div className="card-body">
      <h5 className="card-title">Name:<span> {todo.name} </span></h5>
       <h6 className="card-subtitle mb-2 text-body-secondary">Description:<span> {todo.title}</span></h6>
       <p className="card-text">Status:<select value={todo.status} onChange={(e) => toggleStatus(todo.id, e.target.value)}> {/* Add select dropdown */}
       <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed" >Completed</option>
      </select></p> 
      
      
      

       <button style={{marginRight: '20px',backgroundColor:'brown'}}onClick={() => deleteTodo(todo.id)}>Delete</button>
       <button style={{marginRight: '20px',backgroundColor: 'MediumSeaGreen'}}onClick={() => toggleStatus(todo.id)}>Toggle Status</button>
      
  </div> 
   </div>
   </div>
 
  );
};

export default Tododisplay; 