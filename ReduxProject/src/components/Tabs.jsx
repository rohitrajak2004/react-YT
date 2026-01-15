import React from 'react'
import { useSelector } from 'react-redux'

const Tabs = () => {
    const resultVideo = useSelector((state) => (state.search.resultsVideo))
    const loading = useSelector((state) => (state.search.loading))
    const error = useSelector((state) =>(state.search.error))   

    const data = resultVideo.map((item)=>({
        id:item.id,
        src:item.video_files[0].link,
        title:item.user.name
    }))
    
    if(loading){
        return (
            <div className='bg-[#282427] flex-1 px-5 justify-center items-center overflow-y-scroll h-full'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h2 className='text-2xl'>Loading...</h2>
        </div>
      </div>
        )
    }

    if (error) {
    return (
      <div className='bg-[#282427] flex-1 px-5 justify-center items-center overflow-y-scroll h-full'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h2 className='text-2xl text-red-500'>Error: {error}</h2>
        </div>
      </div>
    );
  }



  return (
    <div className='scrollbar-hide bg-[#282427] flex-1 px-15 justify-center items-center overflow-y-scroll h-full w-full '>
        <div className=' flex flex-wrap gap-5 p-5  justify-center h-full w-full'>
            {data && data.length > 0 ? (
          data.map((data, index) => (  
            <div key={data.id || index} className='h-82 w-60 relative '>
               <video className='h-full w-full object-center object-cover bg-black/30 backdrop-blur-md' muted autoPlay playsInline loop src={data.src}>
                </video>
              <h2 className='absolute bottom-3 left-3 text-m leading-none capitalize'>
                {data.title || "Image"}
              </h2>
            </div>
          ))
        ) : (
          <div className='flex flex-col items-center justify-center h-full'>
            <h2 className='text-4xl'>No results found</h2>
          </div>
        )}
        </div>
    </div>
  )
}

export default Tabs



