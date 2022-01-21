import React from "react";
import { Routes, Route } from "react-router-dom";

import Lithuania from "./components/country/Lithuania";
import CityContainer from "./components/cities/CityContainer";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Lithuania />} />
        <Route path="/:city" element={<CityContainer />} />
      </Routes>
    </div>
  );
};

export default App;
