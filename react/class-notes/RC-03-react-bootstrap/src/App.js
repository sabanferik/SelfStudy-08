import "./App.css";

import React from "react";

//!bootstrap in yolunu import etmeliyiz, dilersek bunu index.js ye de yapabiliriz
import "bootstrap/dist/css/bootstrap.min.css";

import dataA from "./data";

import CourseCard from "./components/CourseCard";

function App() {
  return (
    <div>
    
      <CourseCard veri={dataA} />
    </div>
  );
}

export default App;
