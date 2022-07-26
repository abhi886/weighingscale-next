import React from "react";

const MonitorMostUsed = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-2 '>
      <div className='grid md:col-span-2'>
        <p>Most Used Products</p>
      </div>

      <div className='grid grid-cols-2 text-xxs  gap-1 place-items-center text-center pt-2'>
        <div className='bg-gradient-to-b from-sky-500 to-blue-700 rounded-lg text-white w-full h-8 px-2'>
          Small Tub
        </div>
        <div className='bg-green-900 rounded-lg text-white w-full h-8 px-2 '>
          All PLU
        </div>
        <div className='bg-gradient-to-b from-sky-500 to-blue-700 rounded-lg text-white w-full h-8 px-2'>
          Medium Tub
        </div>
        <div className='bg-green-900 rounded-lg text-white w-full h-8 px-2'>
          Search
        </div>
        <div className='bg-gradient-to-b from-sky-500 to-blue-700 rounded-lg text-white w-full h-8 px-2'>
          Large Tub
        </div>
        <div className='bg-green-900 rounded-lg text-white w-full h-8 px-2'>
          Top 20 Items
        </div>
        <div className='bg-gradient-to-b from-sky-500 to-blue-700 rounded-lg text-white w-full h-8 px-2'>
          Product Info
        </div>
        <div className='bg-green-900 rounded-lg text-white w-full h-8 px-2'>
          Date/Time
        </div>
      </div>
    </div>
  );
};
export default MonitorMostUsed;
