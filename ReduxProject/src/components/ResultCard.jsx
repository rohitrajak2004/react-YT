
import { useSelector } from 'react-redux'


const ResultCard = () => {
  const results = useSelector(state => (state.search.results))
  const loading = useSelector(state => state.search.loading);
  const error = useSelector(state => state.search.error);

  if (loading) {
    return (
      <div className='bg-[#282427] flex-1 px-15 justify-center items-center overflow-y-scroll h-full'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h2 className='text-2xl'>Loading...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='bg-[#282427] flex-1 px-15 justify-center items-center overflow-y-scroll h-full'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h2 className='text-2xl text-red-500'>Error: {error}</h2>
        </div>
      </div>
    );
  }


  return (
    <div className='scrollbar-hide flex-1 px-7 justify-center items-center overflow-y-scroll h-full'>
      <div className=' flex flex-wrap gap-5 p-5 justify-center pb-3'>
        {results && results.length > 0 ? (
          results.map((result, index) => (  
            <div key={result.id || index} className='h-82 w-60 relative '>
              <img
                className='select-none h-full w-full object-cover object-center'
                src={result.urls?.regular || result.urls?.small || "https://images.unsplash.com/photo-1578860549169-219f5e786c1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGh1c2t5fGVufDB8fDB8fHww"}
                alt={result.alt_description || "search result"}
              />
              <h2 className='absolute capitalize bottom-3 left-3 text-m leading-4 '>
                {result.alt_description || result.user?.name || "Image"}
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

export default ResultCard

// bg-[#A4A18B]