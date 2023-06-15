import { useState } from "react";
import "./pages.css";
import { Link } from "react-router-dom"
import data from "../data/data.json";

function Home() {

  const [tasks, setTasks] = useState(data); //to store data
  const [taskName, setTaskname] = useState("");
  const [priority, setPriority] = useState("");

  /*const search = () => {
    <></>
  }*/
  const add = (e) => {
    e.preventDefault();

    const newTask = {
      task: taskName,
      taskID: Date.now(),
      priority: "low"
    } //declare obj
    setTasks([...tasks, newTask]) //method
  }

  const del = (taskID) => {
    const deleteTask = tasks.filter(taskName => taskName.taskID !== taskID);
    setTasks(deleteTask);
  }

  const update = (taskID) => {
    let a = tasks[taskID]

    a.Name = taskName
  }

  const handlePriority = (taskID, e) => {
    const value = e.target.value;

    setPriority(value);

    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.taskID === taskID) {
          return {
            ...task,
            priority: value
          }
        }
        return task
      })
    })
  }


  return (
    <div className='wholeBack'>

      <div className="overall">
        <ol>
          {tasks.map((toAdd) =>
            <li className={`${toAdd.priority === "high" ? "high" : "low"}`}>{toAdd.task}
              <select onChange={(event) => handlePriority(toAdd.taskID, event)}>
                <option value="high">High-level-priority</option>
                <option value="middle">Middle-level-priority</option>
                <option value="low">Low-level-priority</option>
              </select>
              <button onClick={() => update(toAdd.taskID)}>Update</button>
              <button onClick={() => del(toAdd.taskID)}>Delete</button>
            </li>
          )}
        </ol>


        <div className="inputItems">
          <form>
            <input type="text" placeholder="Enter task here" onChange={(event) => setTaskname(event.target.value)} />
            <button onClick={add}>Add</button>
            <button onClick={add}>Search</button>
          </form>
        </div>
        <div>
          <Link to={"/Login"}>Logout</Link>
        </div>
      </div>

    </div>
  )
};

export default Home
