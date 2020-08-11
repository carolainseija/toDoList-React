import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TaskRow} from './Components/TaskRow';
import { TaskBanner } from './Components/TaskBanner';
import { TaskCreator } from './Components/TaskCreator';
import { VisibilityControl } from './Components/VisibilityControl';


function App() {
  

  const [userName, setUserName] = useState('Carolain');
  const  [taskItems, setTaskItems] = useState([
    {name: 'task One', done: false},
    {name: 'task Two', done: false},
    {name: 'task Three', done: true},
    {name: 'task Four', done: false}
  ])
  const [completed, setCompleted] = useState(true)

  useEffect(() => {
    let data = localStorage.getItem('task');
    if (data != null) {
      setTaskItems(JSON.parse(data));
    } else {
      setUserName('Carolain example')
      setTaskItems([
        {name: 'Task One example', done: false}, 
        {name: 'Task Two example', done: false},
        {name: 'Task Three example', done: true},
        {name: 'Task Four example', done: false}
      ])
      setCompleted(true);
    }
  }, []);


  const createNewTask = TaskName  => {
    if (!taskItems.find(t => t.name === TaskName))  {
      setTaskItems([...taskItems, {name: TaskName, done: false}])
    }
    }
  

  const toggleTask = task =>
  setTaskItems(taskItems.map(t => (t.name === task.name ? {...t,done: !t.done} : t)))

const taskTableRows = (doneValue) => 
taskItems
.filter(task => task.done === doneValue)
.map(task =>  (
  
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
      <TaskCreator
      callback={createNewTask}
      />
      <table className="table table-striped table-bordered">
        <thead>
        <tr>
          <th>Description</th>
          <th>Done</th>
        </tr>
        </thead>
      <tbody>
        {taskTableRows(false)}
      </tbody>
      </table>
      <div className="bg-secondary text-white text-center p-2 mx-5">
        <VisibilityControl
        isChecked={completed}
        callback={checked => setCompleted(checked)}
        />
      </div>
      {
        setCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
            {taskTableRows(true)}
          </tbody>
          </table>
        
        )
      }
    </div>
  );
}

export default App;
