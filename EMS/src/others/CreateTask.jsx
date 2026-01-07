import React from "react";

const CreateTask = () => {
  return (
    <div className="h-1/2 w-full ">
      <div className="w-full h-full">
        <form className="flex justify-between rounded bg-[#37415C] h-full w-full p-5">
          <div className="flex flex-col justify-between w-2/5">
            <div className="w-full">
              <h4 className="text-xl">Task Title</h4>
              <input
                type="text"
                placeholder="Make a UI design"
                className="border focus:outline-none border-[#0C969C] rounded-sm text-xl px-3 py-1 placeholder:text-neutral-400 w-full"
              />
            </div>
            <div className="w-full">
              <h4 className="text-xl">Date</h4>
              <input
                type="date"
                placeholder=""
                className="border focus:outline-none border-[#0C969C] rounded-sm text-xl px-3 py-1 placeholder:text-neutral-400 w-full"
              />
            </div>
            <div className="w-full">
              <h4 className="text-xl">Asign to</h4>
              <input
                type="text"
                placeholder="employee name"
                className="border focus:outline-none border-[#0C969C] rounded-sm text-xl px-3 py-1 placeholder:text-neutral-400 w-full"
              />
            </div>
            <div className="w-full">
              <h4 className="text-xl">Category</h4>
              <input
                type="text"
                placeholder="dasign, dev,etc."
                className="border focus:outline-none border-[#0C969C] rounded-sm text-xl px-3 py-1 placeholder:text-neutral-400 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col w-1/3 h-full justify-between">
            <div className="w-full h-full ">
              <h4 className="text-xl">Description</h4>
              <textarea
                className="text-xl px-3 py-1 border focus:outline-none border-[#0C969C] placeholder:text-neutral-400 rounded-sm w-full h-3/4"
                name=""
                id=""
              ></textarea>
            </div>
            <button className="active:scale-95 text-xl px-4 py-2 rounded-xl bg-[#0C969C]">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
