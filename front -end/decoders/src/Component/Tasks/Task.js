import React, { useState, useEffect } from "react";
import axios from "axios"; // Assuming you have axios or any other library for making API requests
import "./Task.css";

function Task() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Define the function to fetch data from the API
    const fetchData = async () => {
      try {
        // Make the API request
        const response = await axios.get("http://localhost:3001/api/tasks");
        // Assuming the API returns an array of task items, update the state
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty array [] ensures this effect runs only once when the component mounts

  return (
    <div>
      <div className="tab-head">Upcoming Task</div>

      <div className="tasks">
        <ul>
          {/* Map over the fetched tasks and render them */}
          {tasks.map((task, index) => (
            <li key={index} className={`l${index + 1}`}>
              {task.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Task;
