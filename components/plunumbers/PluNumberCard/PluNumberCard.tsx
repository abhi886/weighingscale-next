import React from "react";

const PluNumberCard = ({ value }) => {
  return (
    <div
      className='bg-black text-white w-full h-full text-center rounded-lg'
      onClick={() => alert(value)}
    >
      {value}
    </div>
  );
};
export default PluNumberCard;
