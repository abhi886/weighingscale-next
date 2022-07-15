import React from "react";

const monitorTopDisplay = () => {
  return (
    <>
      <div className='grid grid-cols-4'>
        <div>
          <p className='text-xs'>TARE</p>
          <p className='text-xl text-bold text-white'>0.000</p>
        </div>
        <div>
          <p className='text-xs'>WEIGHT</p>
          <p className='text-xl text-bold text-white'>0.000</p>
        </div>
        <div>
          <p className='text-xs'>UNIT PRICE</p>
          <p className='text-xl text-bold text-white'>0.000</p>
        </div>
        <div>
          <p className='text-xs'>TOTAL PRICE</p>
          <p className='text-xl text-bold text-white'>0.000</p>
        </div>
      </div>
    </>
  );
};

export default monitorTopDisplay;
