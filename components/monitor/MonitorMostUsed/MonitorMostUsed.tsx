import React from "react";

const MonitorMostUsed = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-2 '>
      <div className='grid md:col-span-2'>
        <p>Most Used Products</p>
      </div>

      <div className='grid grid-cols-2 text-xs md:h-28 gap-1 place-items-center text-center pt-2'>
        <div className='bg-green-900 rounded-lg text-white w-full h-8 px-2'>
          Small Tub
        </div>
        <div className=''>All PLU</div>
        <div className='bg-green-900 rounded-lg text-white w-full h-8 px-2'>
          Medium Tub
        </div>
        <div className=''>Large Tub</div>
        <div className='bg-green-900 rounded-lg text-white w-full h-8 px-2'>
          SEARCH
        </div>
        <div>Top 20 Items</div>
        <div className='bg-green-900 rounded-lg text-white w-full h-8 px-2'>
          Product Info
        </div>
        <div>Date/Time</div>
      </div>
    </div>
  );
};
export default MonitorMostUsed;
