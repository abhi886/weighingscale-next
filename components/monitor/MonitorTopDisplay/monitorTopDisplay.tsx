import React from "react";

const monitorTopDisplay = () => {
  return (
    <>
      <div className='grid grid-cols-4'>
        <div>
          <p className='text-xs'>TARE</p>
          <p className='text-sm md:text-xl text-bold text-white'>0.000</p>
        </div>
        <div>
          <p className='text-xs'>WEIGHT</p>
          <p className='text-sm md:text-xl text-bold text-white'>0.000</p>
        </div>
        <div>
          <p className='text-xs'>U. PRICE</p>
          <p className='text-sm md:text-xl text-bold text-white'>0.000</p>
        </div>
        <div>
          <p className='text-xs'>T. PRICE</p>
          <p className='text-sm md:text-xl text-bold text-white'>0.000</p>
        </div>
      </div>
    </>
  );
};

export default monitorTopDisplay;
