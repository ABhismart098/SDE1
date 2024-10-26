import React, { useState } from "react";
import "./dashboard.css";
// import Modal, { PopupModal } from "./PopupModal";
import { useNavigate } from "react-router-dom";
import CommonModal from "./PopupModal";

function TaskDashboard() {
  const navigate = useNavigate();
  const taskHandler = (mode) => {
    navigate(`/task/create?${mode}`);
  };
  return (
    <>
      <div className="dashboardContainer">
        {/* Search Bar */}
        <div className="searchBar">
          <input type="text" placeholder="Search for a task" />
          <button className="searchButton">🔍</button>
        </div>

        {/* Calendar Section */}
        <div className="calendar">
          <div className="calendarDays">
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>
          <div className="calendarDates">
            <span>09</span>
            <span>10</span>
            <span>11</span>
            <span className="activeDate">12</span>
            <span>13</span>
            <span>14</span>
            <span>15</span>
          </div>
        </div>

        {/* Task Summary Section */}
        <div className="taskSummary">
          <div className="taskCard complete">
            <div className="icon">✅</div>
            <div className="taskInfo">
              <p>Task Complete</p>
              <h2>
                50 <small>This Week</small>
              </h2>
            </div>
          </div>
          <div className="taskCard pending">
            <div className="icon">❌</div>
            <div className="taskInfo">
              <p>Task Pending</p>
              <h2>
                08 <small>This Week</small>
              </h2>
            </div>
          </div>
        </div>

        {/* Weekly Progress Bar */}
        <div className="progressSection">
          <p>Weekly Progress</p>
          <div className="progressBar">
            <div className="progressComplete"></div>
            <div className="progressPending"></div>
          </div>
        </div>

        {/* Task List Section */}
        <div className="taskListHeader">
          <h3>Tasks Today</h3>
          <a href="#">View All</a>
        </div>
        <ul className="taskList">
          <li>
            <input type="checkbox" />
            <span>Finishing Wireframe</span>
            <button className="deleteButton">🗑️</button>
            <button className="editButton">✏️</button>
          </li>
          <li>
            <input type="checkbox" />
            <span>Meeting with team</span>
            <button className="deleteButton">🗑️</button>
            <button className="editButton">✏️</button>
          </li>
          <li>
            <input type="checkbox" defaultChecked />
            <span>Buy cat food</span>
            <button className="deleteButton">🗑️</button>
            <button className="editButton">✏️</button>
          </li>
          <li>
            <input type="checkbox" />
            <span>Finishing daily commission</span>
            <button className="deleteButton">🗑️</button>
            <button className="editButton">✏️</button>
          </li>
        </ul>

        {/* Add New Task Button */}
        <div className="addTaskButton">
          <button onClick={() => taskHandler("add")}>+</button>
        </div>
      </div>
    </>
  );
}

export default TaskDashboard;
