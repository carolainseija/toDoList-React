import React, { useState } from 'react';

export const TaskCreator = props => {
    const [newTaskName, setNewTaskName] = useState('');
   const  newTaskValue = e => setNewTaskName(e.target.value);
  const createNewTask = () => {
      {props.callback(newTaskName)};
      setNewTaskName(' ');
  }

    return(
        <div className="my-1">
<input
type="text"
className="form-control"
value={newTaskName}
onChange={newTaskValue}

></input>
<button className="btn btn-primary mt-1" onClick={createNewTask}>
    Agregar
</button>
        </div>
    )
}