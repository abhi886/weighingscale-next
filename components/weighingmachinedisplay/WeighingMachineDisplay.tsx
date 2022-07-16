import React, { useState } from "react";
import MonitorDisplay from "@components/monitordisplay/MonitorDisplay";
import PluDisplay from "@components/pludisplay/PluDisplay";
import SaveNumberDisplay from "../savenumbersdisplay/SaveNumberDisplay";

const WeighingMachineDisplay = () => {
  const [pluValue, setPluValue] = useState("");
  const [productDisplayValue, setProductDisplayValue] = useState("");
  const handlePluChange = (e) => {
    setPluValue(e.target.value);
  };
  const handlePluChangeFromPluDisplaySection = (value) => {
    if (!isNaN(value)) {
      setPluValue(pluValue + value);
    }
    if (isNaN(value)) {
      if (value === "PLU") {
        console.log("Change State for Display product");
      }
    }
  };
  return (
    <div className='w-full bg-gray-100 border-8 rounded-lg p-12'>
      <div className='sm:grid sm:grid-cols-3 sm:grid-rows-2 gap-x-2'>
        {/* First Grid - Monitor Section*/}
        <MonitorDisplay
          productDisplayValue={productDisplayValue}
          pluValue={pluValue}
          handlePlu={handlePluChange}
        ></MonitorDisplay>
        {/* Second Grid - PLU Number Section*/}
        <PluDisplay
          handlePluChange={handlePluChangeFromPluDisplaySection}
        ></PluDisplay>
        {/* Last Grid - SaveNumber Section */}
        <SaveNumberDisplay></SaveNumberDisplay>
      </div>
    </div>
  );
};

export default WeighingMachineDisplay;
