import React from "react";
import {
  MonitorTopDisplay,
  MonitorDisplayInput,
  MonitorMostUsed,
  MonitorBottomDisplay,
} from "@components/monitor";

const MonitorDisplay = () => {
  return (
    <div className='sm:col-span-2 border border-r-1 rounded-lg p-4 '>
      <div>Digi Logo | min - max whatever it is</div>
      <div className='w-full bg-gradient-to-r from-blue-400 to-blue-500 border-4 border-slate-400 p-2'>
        <MonitorTopDisplay></MonitorTopDisplay>
        <MonitorDisplayInput></MonitorDisplayInput>
        <MonitorMostUsed></MonitorMostUsed>
        <MonitorBottomDisplay></MonitorBottomDisplay>
      </div>
    </div>
  );
};
export default MonitorDisplay;
