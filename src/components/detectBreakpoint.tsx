import { useEffect, useState } from "react";
import { breakpoint } from "../styles/breakpoints";

export const useIsSsr = () => {
  const [isSsr, setIsSsr] = useState(true);

  useEffect(() => {
    setIsSsr(false);
  }, []);

  return isSsr;
};

export const GetWindowDimensions = () => {
  const isSsr = useIsSsr();

  const windowWidth: any = isSsr ? null : window.innerWidth;

  const [width, setWidth] = useState(windowWidth);

  // const isDesktop = width >= breakpoint.lg.slice(0, -2);

  const updateWidth = () => {
    setWidth(windowWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return {
    width,
  };
};
