import React from 'react';
import Cards from './Cards';

const RightContant = (props) => {
  return (
    <div id='right' className='w-2/3 pb-4 flex overflow-x-auto flex-nowrap'> {/* Added overflow-x-auto */}
      <div className='flex flex-row gap-5'>
        {props.Users.map(function(elem,idx){

          return <Cards key={idx} bgimg={elem.bgimg} tag={elem.tag} id={idx}/>
        })}
      </div>
    </div>
  );
};

export default RightContant;