import { useRef } from "react";
export const useRenders = (value: any) => {
  const renders = useRef(0);
  console.log(`render from ${value}`, renders.current++);
};
