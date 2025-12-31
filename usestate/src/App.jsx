import { useState } from "react"

const App = () => {
  const [num, setNum]  = useState(0)

  function increase(){
    setNum(num+1)
  }
   function decrease(){
    setNum(num-1)
  }
   function jump(){
    setNum(num+5)
  }

  return (
    <div className="flex flex-col gap-8 justify-center align-middle text-center">
      <div className='bg-blue-300 h-40 w-40 p-8 text-6xl'>{num}</div>
      <div className="flex gap-8">
      
        <button onClick={increase} className='bg-amber-100 h-30 w-30'>increase</button>
        <button onClick={decrease} className='bg-amber-100 h-30 w-30'>decrease</button>
        <button onClick={jump} className='bg-amber-100 h-30 w-30'>jump 5</button> 
        <button></button>     
        </div>
    </div>
  )
}

export default App