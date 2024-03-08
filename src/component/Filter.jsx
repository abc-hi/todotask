// Filter.jsx
import React from 'react';

const Filter = ({ view,changeView }) => {
  return (
    <div className="filter">
      <label htmlFor="filter-todos"style={{ marginTop: '20px',marginRight:'20px' }}>Filter:</label>
      <select value={view} onChange={(e)=>changeView(e)} name="filter-todos"id='filter-todos'>
        <option value="all">All</option>
        <option value="completed"style={{backgroundColor: 'MediumSeaGreen'}}>Completed</option>
        <option value="pending">Pending</option></select></div>

      

    
  );
};

export default Filter;

// // (e)=>changeView(e)

// /* <button onClick={() => setFilter('all')}>All</button>
//       <button onClick={() => setFilter('pending')}>Pending</button>
//       <button onClick={() => setFilter('completed')}>Completed</button>
//       <button onClick={() => setFilter('not completed')}>Not Completed</button> */