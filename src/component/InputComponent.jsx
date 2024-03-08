// InputComponent.jsx
import React, { useState } from 'react';

const InputComponent = ({ addTodo }) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('all'); // Add status state

  const handleSubmit = () => {
    if (name.trim() && title.trim()) {
      addTodo(name, title, status); // Pass status to addTodo
      setName('');
      setTitle('');
    }
  };

  return (
    <div>
      <h4 style={{color:'MediumSeaGreen',textAlign:'center'}}>My todo</h4>
      <input type="text" placeholder="Todo name" value={name} onChange={(e) => setName(e.target.value)}style={{ marginTop: '20px',marginRight:'20px',marginLeft:'200px' }} />
      <input type="text" placeholder="Todo Description" value={title} onChange={(e) => setTitle(e.target.value)} style={{ marginTop: '20px',marginRight:'20px',marginLeft:'200px' }}/>
      <button onClick={handleSubmit} style={{marginLeft:'200px'}}>Add Todo</button>

      {/* /*{ <select value={status} onChange={(e) => setStatus(e.target.value)}> Add select dropdown */}
        {/* <option value="all">All</option> */}
        {/* <option value="pending">Pending</option> */}
        {/* <option value="completed">Completed</option> */}
      {/* </select> } */}
    </div>
  );
};

export default InputComponent;