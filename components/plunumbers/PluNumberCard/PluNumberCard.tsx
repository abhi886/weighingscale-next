import React from "react";

const PluNumberCard = ({ value, handlePluChange }: any) => {
  return (
    <div
      className='bg-black text-white w-full h-full text-center rounded-lg'
      onClick={() => handlePluChange(value)}
    >
      {value}
    </div>
  );
};
export default PluNumberCard;
