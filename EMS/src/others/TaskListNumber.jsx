import React from 'react'

const TaskListNumber = () => {
  return (
    <div className="task h-[25%] mt-7 flex items-center gap-4 grow overflow-x-auto  rounded-2xl mb-9">
        <div className="shrink-0 h-full rounded-2xl  bg-blue-300 p-9 flex flex-col w-1/4 gap-2 ">
          <h1 className="text-3xl font-semibold">0</h1>
          <h2 className="text-2xl">New Task</h2>
        </div>
        <div className="shrink-0 h-full rounded-2xl  bg-red-300 p-9 flex flex-col w-1/4 gap-2 ">
          <h1 className="text-3xl font-semibold">0</h1>
          <h2 className="text-2xl">New Task</h2>
        </div>
        <div className="shrink-0 h-full rounded-2xl  bg-green-300 p-9 flex flex-col w-1/4 gap-2 ">
          <h1 className="text-3xl font-semibold">0</h1>
          <h2 className="text-2xl">New Task</h2>
        </div>
        <div className="shrink-0 h-full rounded-2xl  bg-yellow-300 p-9 flex flex-col w-1/4 gap-2 ">
          <h1 className="text-3xl font-semibold">0</h1>
          <h2 className="text-2xl">New Task</h2>
        </div>
        <div className="shrink-0 h-full rounded-2xl  bg-emerald-700 p-9 flex flex-col w-1/4 gap-2 ">
          <h1 className="text-3xl font-semibold">0</h1>
          <h2 className="text-2xl">New Task</h2>
        </div>
        <div className="shrink-0 h-full rounded-2xl  bg-fuchsia-600 p-9 flex flex-col w-1/4 gap-2 ">
          <h1 className="text-3xl font-semibold">0</h1>
          <h2 className="text-2xl">New Task</h2>
        </div>
  
      </div>
  )
}

export default TaskListNumber