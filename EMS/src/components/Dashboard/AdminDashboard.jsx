import React from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/CreateTask'
import AllTask from '../../others/AllTask'

const AdminDashboard = () => {
  return (
    <div className="h-screen w-screen p-10 bg-[#0B1B32] text-white">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard