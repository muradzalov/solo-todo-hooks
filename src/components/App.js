import React, { useState } from 'react';
import './App.css'
import OngoingTasks from './OngoingTasks';
import AddTask from './AddTask';

const App = () => {
  const [existingTasks, setExistingTasks] = useState(['Complete my to-do application', 'Study React for 3 hours today', 'Work & make sure you do a good job', 'Go to BJJ', 'Eat clean today']);
  const [submittedTask, setSubmittedTask] = useState('')

  return (
    <div>
      <div style={{ textAlign: 'center', padding: '5px' }} className="ui block header">
        <h2 className="title">
          Murad's To-Do App v2
        </h2>
        <h4 className="title-footnote">
          (featuring hooks)
        </h4>
      </div>

    <AddTask setSubmittedTask={setSubmittedTask} setExistingTasks={setExistingTasks} submittedTask={submittedTask} existingTasks={existingTasks}/>

    <br />

    <OngoingTasks existingTasks={existingTasks} setExistingTasks={setExistingTasks}/>

    </div>
  )
}

export default App;