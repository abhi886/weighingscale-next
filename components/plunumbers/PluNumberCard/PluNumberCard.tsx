import React from "react";
import cn from "classnames";
import { useUI } from "@components/context/PluContextProvider";
import s from "./PluNumber.module.css";

const PluNumberCard = ({ value }: any) => {
  const { changePluFromScreenKeyboard }: any = useUI();
  const rootClassname = cn(s.root, {
    [s.rowSpan2]: value === "*",
  });
  return (
    <div
      className={rootClassname}
      onClick={() => changePluFromScreenKeyboard(value)}
    >
      <div
        data-testid='plu-number-card'
        className={value === "*" ? s.paddingDiv : ""}
      >
        {""}
        {value}
      </div>
    </div>
  );
};
export default PluNumberCard;
