import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TaskRow} from './Components/TaskRow';
import { TaskBanner } from './Components/TaskBanner';


function App() {
  

  const [userName, setUserName] = useState('Carolain');
  const  [taskItems, setTaskItems] = useState([
    {name: 'task One', done: false},
    {name: 'task Two', done: false},
    {name: 'task Three', done: true},
    {name: 'task Four', done: false}
  ])

  const toggleTask = task =>
  setTaskItems(taskItems.map(t => (t.name === task.name ? {...t,done: !t.done} : t)))

const taskTableRows = () => 
taskItems.map(task =>  (
  
 <TaskRow 
  task={task}
  key={task.name}
  toggleTask={toggleTask}
  />

 
))


  return (
    <div>
      <TaskBanner
      userName={userName}
      taskItems={taskItems}
      
      />
      <table className="table table-striped table-bordered">
        <thead>
        <tr>
          <th>Description</th>
          <th>Done</th>
        </tr>
        </thead>
      <tbody>
        {taskTableRows()}
      </tbody>
      </table>
    </div>
  );
}

export default App;
