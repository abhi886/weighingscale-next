import React from "react";

const MonitorDisplayInput = () => {
  return (
    <div className='grid grid-cols-3 gap-2 '>
      {/* Text and PLU number */}
      <div className='grid col-span-2 mt-2'>
        <input
          type='text'
          className='p-2 h-6 w-full flex-grow rounded-md focus:outline-none flex-shrink'
        ></input>
      </div>
      {/* Date and Now Serving */}
      <div className='-mt-2'>
        <p className='text-xs'>12.3.4.2022 PM </p>
        <input
          type='text'
          className='p-2 h-6 w-full flex-grow rounded-md focus:outline-none flex-shrink'
        ></input>{" "}
      </div>
    </div>
  );
};

export default MonitorDisplayInput;
