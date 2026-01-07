import React from "react";
import Header from "../../others/Header";
import TaskListNumber from "../../others/TaskListNumber";
import TaskList from "../../Tasklist/TaskList";
const EmployeeDashboard = () => {
  return (
    <div className="h-screen w-screen p-10 bg-[#0B1B32] text-white">
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
