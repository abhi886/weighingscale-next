import React from "react";
import { PluNumberCard } from "@components/plunumbers";
const pluNumbersList = [
  7,
  8,
  9,
  "p",
  4,
  5,
  6,
  "R",
  1,
  2,
  3,
  "X",
  0,
  "C",
  "T",
  "O",
  "U",
  "D",
  "E",
  "*",
  "PLU",
  "AUTO",
  "@",
];
const PluDisplay = () => {
  return (
    <div className='border border-r-1 rounded-lg p-4'>
      <div className='grid grid-cols-4 grid-row-6 gap-1'>
        {pluNumbersList.map((pl) => (
          <PluNumberCard key={pl} value={pl}></PluNumberCard>
        ))}
      </div>
    </div>
  );
};
export default PluDisplay;
