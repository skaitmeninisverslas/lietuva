import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Lithuania from "./components/country/Lithuania";
import CityContainer from "./components/cities/CityContainer";
import { breakpoint } from "./styles/breakpoints";

function useWindowDimensions() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return {
    width,
  };
}

const App = () => {
  const { width }: any = useWindowDimensions();
  const isDesktop = width >= breakpoint.lg.slice(0, -2);
  const cityLink = window.location.pathname.slice(1);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Lithuania isDesktop={isDesktop} />} />
        <Route
          path="/:city"
          element={<CityContainer isDesktop={isDesktop} name={cityLink} />}
        />
      </Routes>
    </div>
  );
};

export default App;
