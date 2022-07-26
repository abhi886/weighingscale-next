import React, { useState, useContext } from "react";
import { useUI } from "@components/context/PluContextProvider";
import { useRenders } from "@components/customHooks/useRenders";

const MonitorDisplayInput = () => {
  const { changePluFromUserKeyboard, pluValue, productDisplayValue }: any =
    useUI();
  console.log(useUI());
  useRenders("Monitor Display Input");

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-2 '>
      {/* Text and PLU number */}
      <div className='grid md:col-span-2 mt-2'>
        <input
          type='text'
          className='p-2 h-6 w-full text-xs flex-grow rounded-md focus:outline-none flex-shrink'
          value={productDisplayValue}
          placeholder={"Enter Name of Product"}
          onChange={() => {
            alert("Typing Not allowed");
          }}
        ></input>
      </div>
      {/* Date and Now Serving */}
      <div className='-mt-2'>
        <p className='text-xs'>12.3.4.2022 PM </p>
        <input
          type='text'
          className='p-2 h-6 w-full text-xs flex-grow rounded-md focus:outline-none flex-shrink'
          value={pluValue}
          placeholder={"Now Serving"}
          onChange={(e) => {
            changePluFromUserKeyboard(e.target.value);
          }}
        ></input>{" "}
      </div>
    </div>
  );
};

export default MonitorDisplayInput;
