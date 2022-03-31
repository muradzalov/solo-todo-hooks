import React from 'react';

const AddTask = (props) => {
  const onSearchChange = (e) => {
    props.setSubmittedTask(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    props.setExistingTasks([...props.existingTasks, props.submittedTask])
    props.setSubmittedTask('') 
  }

  return (

    <div>
      <form onSubmit={onSubmit}>
        
        <label>Add a Task: </label>
        <input
          type='text'
          value={props.submittedTask}
          onChange={onSearchChange}
        />

      </form>
    </div>
  )
}

export default AddTask;