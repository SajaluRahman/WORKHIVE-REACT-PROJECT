import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Navbar3 } from "../../Components/Common/CommonComponents/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

Chart.register(...registerables);

const ProgressionTracker = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newPercentage, setNewPercentage] = useState("");
  const [editingTask, setEditingTask] = useState(null); // Track the task being edited

  const toggleCheckbox = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, checked: !task.checked } : task
    ));
  };

  const addTask = () => {
    if (newTask.trim() === "" || newPercentage.trim() === "" || isNaN(newPercentage) || newPercentage < 0 || newPercentage > 100) {
      alert("Please enter a valid task name and percentage (0-100).");
      return;
    }

    if (editingTask !== null) {
      // Update existing task
      setTasks(tasks.map(task =>
        task.id === editingTask.id
          ? { ...task, name: newTask, percentage: parseInt(newPercentage) }
          : task
      ));
      setEditingTask(null); // Reset editing state
    } else {
      // Add new task
      const newTaskObj = {
        id: tasks.length + 1,
        name: newTask,
        percentage: parseInt(newPercentage),
        checked: false,
      };
      setTasks([...tasks, newTaskObj]);
    }
    
    setNewTask("");
    setNewPercentage("");
  };

  const editTask = (task) => {
    setNewTask(task.name);
    setNewPercentage(task.percentage.toString());
    setEditingTask(task);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const checkedTasks = tasks.filter(task => task.checked);

  const chartData = {
    labels: checkedTasks.map(task => task.name),
    datasets: [
      {
        label: "Completion Percentage",
        data: checkedTasks.map(task => task.percentage),
        backgroundColor: "rgba(0, 234, 255, 0.7)",
        borderColor: "#00eaff",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gray-900 text-white ">
      <Navbar3 />

      {/* To-Do List Section */}
      <div className="w-full md:w-1/2 p-4 md:p-6 bg-gray-800 mt-12 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Task List</h2>

        {/* Input Section */}
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter task name..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 p-2 rounded bg-gray-700 text-white outline-none border border-gray-600"
          />
          <input
            type="number"
            placeholder="%"
            value={newPercentage}
            onChange={(e) => setNewPercentage(e.target.value)}
            className="w-full sm:w-20 p-2 bg-gray-700 text-white outline-none border border-gray-600 text-center"
            min="0"
            max="100"
          />
          <button
            onClick={addTask}
            className="bg-[#00eaff] text-black font-bold px-4 py-2 rounded hover:bg-[#00b3cc] transition"
          >
            {editingTask ? "Update" : "Add"}
          </button>
        </div>

        {/* Task List */}
        <div className="max-h-[300px] overflow-y-auto">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between bg-gray-700 p-3 mb-2 rounded-lg">
              <input
                type="checkbox"
                checked={task.checked}
                onChange={() => toggleCheckbox(task.id)}
                className="w-5 h-5 mr-3"
              />
              <span className="flex-1">{task.name}</span>
              <span className="font-bold">{task.percentage} %</span>
              
              {/* Edit Button */}
              <button 
                onClick={() => editTask(task)} 
                className="px-2 hover:text-yellow-400"
              >
                <FontAwesomeIcon icon={faPen} />
              </button>

              {/* Delete Button */}
              <button 
                onClick={() => deleteTask(task.id)} 
                className="text-red-600 px-2 hover:text-red-400"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Chart Section */}
      <div className="w-full md:w-1/2 p-4 md:p-6 mt-6 md:mt-12 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Progress Graph</h2>
        {checkedTasks.length > 0 ? (
          <div className="w-full h-64 md:h-96">
            <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        ) : (
          <p className="text-gray-400 mt-16">Check tasks to display progress</p>
        )}
      </div>
    </div>
  );
};

export default ProgressionTracker;
