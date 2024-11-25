import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { useState } from "react";
import { nanoid } from "nanoid";
// jsx语法 
function App(props) {

  //添加任务
  function addTask(name) {
    const newTask = {
      id: `todo-${nanoid()}`,
      name,
      completed: false
    }

    setTasks([...tasks, newTask])
  }

  //编辑任务
  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if(id === task.id) {
        // Copy the task and update its name
        return {...task, name: newName}
      }
      return task
    })

    setTasks(editedTaskList)
  }

  // 改变Task的完成状态
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

  // 删除任务
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => {
      return id !== task.id
    })
    setTasks(remainingTasks)
  }


  const [filter, setFilter] = useState("All")

  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    completed: (task) => task.completed
  }

  const FILTER_NAMES = Object.keys(FILTER_MAP)

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton 
      key={name} 
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ))

  const [tasks, setTasks] = useState(props.tasks)

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => {
    return (
      <Todo 
        id={task.id} 
        name={task.name} 
        completed={task.completed} 
        key={task.id} 
        toggleTaskCompleted={toggleTaskCompleted}
        editTask={editTask}
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
        {filterList}

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
