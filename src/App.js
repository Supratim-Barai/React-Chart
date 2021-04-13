import React from "react";
import "./App.css";

import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

const App = () => {
  return (
    <div>
      <LineChart />
      <BarChart />
      <PieChart />
    </div>
  );
};

export default App;
