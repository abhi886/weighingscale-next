import React from "react";
import { PluNumberCard } from "@components/plunumbers";

const PluDisplay = () => {
  return (
    <div className='border border-r-1 rounded-lg p-4'>
      <div className='grid grid-cols-4 grid-row-6 gap-1'>
        <PluNumberCard></PluNumberCard>
      </div>
    </div>
  );
};
export default PluDisplay;
