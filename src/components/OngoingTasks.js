import React from 'react'

const OngoingTasks = ({ existingTasks, setExistingTasks }) => {
  const onClickDelete = (task) => {
    const tasksAfterDelete = existingTasks.filter((element) => {
      return element !== task;
    })

    setExistingTasks(tasksAfterDelete);
  }

  const existingTodos = existingTasks.map((task, index) => {
    return (
      <ul style={{ margin: '5px' }} key={index}>
        <button onClick={() => onClickDelete(task)} style={{ marginRight: '5px' }} type="button">x</button>
          • {task}
      </ul>
    )
  })

  return (
    <div>
      Ongoing Tasks
        {existingTodos}
    </div>
  )
}

export default OngoingTasks;