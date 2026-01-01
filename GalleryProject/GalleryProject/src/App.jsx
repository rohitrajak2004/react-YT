import React, { useEffect, useState } from "react";
import axios from "axios";


const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const respons = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=8`
    );
    setUserData(respons.data);
    console.log(respons.data);
    
    
  };
  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className="flex justify-center items-center text-center text-amber-50">Loading...</h3>
  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){

      return <div key={idx} className="bg-white/5 h-96 w-80 rounded-2xl flex flex-col items-center pt-2 gap-2 backdrop-blur-md border border-white/10">
          <img className="h-80 w-64 object-cover rounded-xl" src={elem.download_url} alt="" />
          <h4 className="text-xl font-bold italic text-white">{elem.author}</h4>
        </div>
    })
  }

  return (
    <div className="bg-gray-900 min-h-screen w-full">
      <div className="flex gap-5 flex-col p-5 h-full w-full justify-center items-center">
        <div className="flex flex-wrap gap-7 justify-center items-center">
          {printUserData}
        </div>
        
        <div className="flex gap-24 ">
          <button
          onClick={()=>{
            if(index>1){
              setIndex(index-1)
              setUserData([])
            }else{
              alert("You are on first page")
            }
          }}
            className="h-10 w-30 p-2 text-xl text-[ #022C22] bg-[#34D399] active:scale-95  rounded font-semibold cursor-pointer"
          >
            Prev
          </button>
          <h3 className="text-xl text-amber-50">Page {index} </h3>
          <button
          onClick={()=>{
            setIndex(index+1)
            setUserData([])
          }}
          className="h-10 w-30 p-2 text-xl text-[ #022C22] bg-[#34D399] active:scale-95  rounded font-semibold cursor-pointer">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
