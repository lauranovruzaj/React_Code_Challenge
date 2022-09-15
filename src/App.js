import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


import './App.css';
import Facts from "./components/Facts";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/facts/page/1" replace={true} />} />
        <Route path="/facts/page/:id" element={<Facts />} />
      </Routes>
    </Router>
  );
}

export default App;
