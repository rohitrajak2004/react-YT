import React from 'react'

const TaskList = () => {
  return (
    <div className="task h-[50%] flex items-center gap-4 grow overflow-x-auto  rounded-2xl">
      <div className="shrink-0 h-full rounded-2xl  bg-blue-300 p-9 flex flex-col w-1/4 gap-2 ">
          <div className="flex justify-between items-center pb-3">
            <h4 className="text-xl font-medium bg-orange-600 px-2 rounded-sm">High</h4>
          <h4 className="text-xl font-medium">05 feb 2026</h4>
          </div>
          <h2 className="text-2xl font-semibold pb-1">Complete The React</h2>
          <h3 className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure laudantium facilis, quae pariatur eos reiciendis?</h3>
        </div>
        <div className="shrink-0 h-full rounded-2xl  bg-red-300 p-9 flex flex-col w-1/4 gap-2 ">
          <div className="flex justify-between items-center pb-3">
            <h4 className="text-xl font-medium bg-orange-600 px-2 rounded-sm">High</h4>
          <h4 className="text-xl font-medium">05 feb 2026</h4>
          </div>
          <h2 className="text-2xl font-semibold pb-1">Complete The React</h2>
          <h3 className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure laudantium facilis, quae pariatur eos reiciendis?</h3>
        </div>
        <div className="shrink-0 h-full rounded-2xl  bg-green-300 p-9 flex flex-col w-1/4 gap-2 ">
          <div className="flex justify-between items-center pb-3">
            <h4 className="text-xl font-medium bg-orange-600 px-2 rounded-sm">High</h4>
          <h4 className="text-xl font-medium">05 feb 2026</h4>
          </div>
          <h2 className="text-2xl font-semibold pb-1">Complete The React</h2>
          <h3 className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure laudantium facilis, quae pariatur eos reiciendis?</h3>
        </div>
        <div className="shrink-0 h-full rounded-2xl  bg-yellow-300 p-9 flex flex-col w-1/4 gap-2 ">
          <div className="flex justify-between items-center pb-3">
            <h4 className="text-xl font-medium bg-orange-600 px-2 rounded-sm">High</h4>
          <h4 className="text-xl font-medium">05 feb 2026</h4>
          </div>
          <h2 className="text-2xl font-semibold pb-1">Complete The React</h2>
          <h3 className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure laudantium facilis, quae pariatur eos reiciendis?</h3>
        </div>
        <div className="shrink-0 h-full rounded-2xl bg-indigo-500 p-9 flex flex-col w-1/4 gap-2 ">
          <div className="flex justify-between items-center pb-3">
            <h4 className="text-xl font-medium bg-orange-600 px-2 rounded-sm">High</h4>
          <h4 className="text-xl font-medium">05 feb 2026</h4>
          </div>
          <h2 className="text-2xl font-semibold pb-1">Complete The React</h2>
          <h3 className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure laudantium facilis, quae pariatur eos reiciendis?</h3>
        </div>
      </div>
  )
}

export default TaskList