import React from "react";

function Cards(props) {
  
  return (
    <div className="h-full w-72 shrink-0"> {/* Set fixed width for each card */}
      <div className=" h-full rounded-4xl bg-cover bg-center flex flex-col justify-between p-5"
      style={{ backgroundImage: `url(${props.bgimg})` }}>
        <div>
          <h1 className="flex justify-center items-center text-2xl bg-white w-12 h-12 px-3 py-1 rounded-full">
            {props.id+1}
          </h1>
        </div>
        <div className="flex justify-between flex-col">
          <div>
            <p className="text-white text-lg pb-12 text-shadow-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              esse! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sint, aliquam facilis qui doloribus velit aspernatur?
            </p>
          </div>
          <div className="flex justify-between">
            <button className="bg-blue-500 px-8 text-base text-white py-2 rounded-full font-semibold">
              {props.tag}
            </button>
            <button className="bg-blue-500 px-3 text-base text-white py-2 rounded-full">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;