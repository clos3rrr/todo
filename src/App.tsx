import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <AppRouter/>
      </div>
    </BrowserRouter>
  );
}

export default App

