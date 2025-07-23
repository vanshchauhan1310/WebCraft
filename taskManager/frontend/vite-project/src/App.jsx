import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const API_URL = 'http://localhost:3000/api/tasks';

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  // Add new task
  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    try {
      setLoading(true);
      await axios.post(API_URL, { title, completed: false });
      setTitle('');
      await fetchTasks();
    } catch (err) {
      console.error('Error adding task:', err);
    } finally {
      setLoading(false);
    }
  };

  // Toggle task completion
  const toggleTask = async (id, currentStatus) => {
    try {
      await axios.put(`${API_URL}/${id}`, { completed: !currentStatus });
      await fetchTasks();
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      await fetchTasks();
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  // Load tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app">
      <h1>Task Manager</h1>
      
      {/* Add Task Form */}
      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Task'}
        </button>
      </form>

      {/* Task List */}
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task._id} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleTask(task._id, task.completed)}>
              {task.title}
            </span>
            <button 
              onClick={() => deleteTask(task._id)}
              className="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;