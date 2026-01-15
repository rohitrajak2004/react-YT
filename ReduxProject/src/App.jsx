import React from 'react'
import SearchBar from './components/SearchBar'
import ResultCard from './components/ResultCard'
import Tabs from './components/Tabs'
import { useSelector } from 'react-redux';



const App = () => {
  const tab = useSelector(state => (state.search.activeTab))
  return (
    <div className='bg-[#282427] h-screen text-white w-screen flex flex-col'>
      
        <SearchBar />
        {tab ==='photo'? <ResultCard /> : <Tabs />}
        
    </div>
  )
}

export default App