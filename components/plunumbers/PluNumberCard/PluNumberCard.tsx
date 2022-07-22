import React from "react";
import { useUI } from "@components/context/context";

const PluNumberCard = ({ value }: any) => {
  const { changePluFromScreenKeyboard }: any = useUI();
  return (
    <div
      className='bg-black text-white w-full h-full text-center rounded-lg'
      onClick={() => changePluFromScreenKeyboard(value)}
    >
      {value}
    </div>
  );
};
export default PluNumberCard;
