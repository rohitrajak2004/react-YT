import "remixicon/fonts/remixicon.css";

const LeftContant = () => {
  return (
    <div className="w-1/3 h-full flex flex-col justify-between">
      <div className="flex flex-col gap-8 p-4">
        <h1 className="text-6xl leading-16 font-bold">
          Prospective <br />
          customer <br />
          segmentation
        </h1>
        <p className="text-lg font-semibold pr-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ullam
          corrupti temporibus, molestiae molestias optio in incidunt quia quasi
          dignissimos architecto voluptate eligendi dolore autem!
        </p>
      </div>
      <div className="text-8xl ">
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
};

export default LeftContant;
