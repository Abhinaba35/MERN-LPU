import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null); 

  const handleChange = (e) => {
    setTask(e.target.value);
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    if (isEditing) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex].text = task;
      setTasks(updatedTasks);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setTasks([...tasks, { text: task }]);
    }

    setTask(""); 
  }; 

  const handleEdit = (index) => {
    setTask(tasks[index].text);
    setIsEditing(true);
    setEditIndex(index);
  }; 

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>My ToDo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter a task"
        />
        <button type="submit">{isEditing ? "Update" : "Add"}</button>
      </form>
      <div style={{ marginTop: "2rem" }}>
        {tasks.length === 0 && <p>No tasks available.</p>}
        {tasks.map((item, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <span>{item.text}</span>
            <button
              onClick={() => handleEdit(index)}
              style={{ marginLeft: "1rem" }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: "0.5rem" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
