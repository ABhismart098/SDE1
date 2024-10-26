import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './HomePage';
import TaskDashboard from '../src/component/dashboard';
import { TaskForm } from './component/TaskCreateForm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/task/create" element={<TaskForm />} />
          <Route path="/tasks" element={<TaskDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
