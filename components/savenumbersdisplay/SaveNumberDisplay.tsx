import React from "react";
import { SaveNumberCard } from "@components/savenumbers";

const SaveNumberDisplay = () => {
  return (
    <div className='col-span-3 border border-r-1 rounded-lg p-4 my-2'>
      <div className='grid grid-cols-12 grid-row-2 gap-2'>
        <SaveNumberCard></SaveNumberCard>
      </div>
    </div>
  );
};
export default SaveNumberDisplay;
