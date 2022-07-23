import React, { useState } from "react";
import MonitorDisplay from "@components/monitordisplay/MonitorDisplay";
import PluDisplay from "@components/pludisplay/PluDisplay";
import SaveNumberDisplay from "../savenumbersdisplay/SaveNumberDisplay";
const productNameWithPlu = [
  { name: "RSPCA chicken Breast Approved", PLU: "258" },
];

const WeighingMachineDisplay = () => {
  return (
    <div className='w-full bg-gray-100 border-8 rounded-lg p-12'>
      <div className='sm:grid sm:grid-cols-3 sm:grid-rows-2 gap-x-2'>
        {/* First Grid - Monitor Section*/}
        <MonitorDisplay></MonitorDisplay>
        {/* Second Grid - PLU Number Section*/}
        <PluDisplay></PluDisplay>
        {/* Last Grid - SaveNumber Section */}
        <SaveNumberDisplay></SaveNumberDisplay>
      </div>
    </div>
  );
};

export default WeighingMachineDisplay;
