import {  createContext, useState } from "react";
import data from "./data";
import Home from "./components/Home";

//!1- context alanı açıyoruz
export const StudentContext=createContext()

const App = () => {


  return (
    //!2- bütün projeye gönderilmek üzere ilk Home u, gönderilecek elemanlarla sarmallayalım
    <StudentContext.Provider value={{}}>
      <Home />
    </StudentContext.Provider>
  );
};

export default App;
