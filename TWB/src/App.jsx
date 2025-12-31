import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [tasks, setTasks] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...tasks];
    copyTask.push({title,detail})
    setTasks(copyTask)
    setTitle("");
    setDetail("");
  };

  const deleteNote = (idx)=>{
    const copyTask = [...tasks];
    copyTask.splice(idx,1)
    setTasks(copyTask)
  }
  return (
    <div className="bg-gray-900 min-h-screen w-full text-white p-10 flex gap-10">
      <div className="h-full gap-5  w-1/2 ">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col gap-5 h-full"
        >
          <h1 className="text-3xl">ADD Notes</h1>
          <input
            type="text"
            placeholder="Write Tasks"
            className="h-14 border-2 rounded"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            name=""
            id=""
            placeholder="Description"
            className="h-42 border-2 rounded"
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          ></textarea>
          <button className=" bg-amber-500 text-xl text-black h-14 w-24 rounded border active:scale-95">
            Submit
          </button>
        </form>
      </div>
      <div className="h-full w-1/2 gap-5 flex flex-col ">
        <h1 className="text-3xl ">Your Notes</h1>
        <div className="h-full w-full gap-5 flex flex-wrap flex-row">
          {tasks.map(function(elem,idx){
            return <div key={idx} className="relative h-60 w-60 rounded-2xl bg-cover bg-[url('data:image/jpeg;base64,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')] p-4">
              <h3 className="font-bold text-black text-2xl">{elem.title}</h3>
              <h4 className="text-gray-700 text-lg pt-2">{elem.detail}</h4>
              <button onClick={()=>{
                deleteNote(idx)
              }} className=" bg-red-500 cursor-pointer active:scale-95 rounded-xl p-1 text-xs absolute bottom-1 right-2">Delete</button>
            </div> 
          })}
          
        </div>
      </div>
    </div>
  );
};

export default App;
