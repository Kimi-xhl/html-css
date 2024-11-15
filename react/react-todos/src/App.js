import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { useState } from "react";
import { nanoid } from "nanoid";
// jsx语法 
function App(props) {

  function addTask(name) {
    const newTask = {
      id: `todo-${nanoid()}`,
      name,
      completed: false
    }

    setTasks([...tasks, newTask])
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task the same ID as the edited task
      if(task.id === id) {
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task
    })

    setTasks(updatedTasks)
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => {
      return id !== task.id
    })
    setTasks(remainingTasks)
  }

  const [tasks, setTasks] = useState(props.tasks)

  const taskList = tasks?.map((task) => {
    return (
      <Todo 
        id={task.id} 
        name={task.name} 
        completed={task.completed} 
        key={task.id} 
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        />
    )
  })

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task'
  const headingText = `${taskList.length} ${tasksNoun} remaining`


 


  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form onSubmit={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />

      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}

      </ul>
    </div>
  );
}




export default App;
