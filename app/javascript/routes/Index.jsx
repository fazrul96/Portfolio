import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import Home from "../components/Home";
// import Resume from "../components/Index/Resume/Resume";
// import Calendar from "../components/Index/Calendar/Calendar";

export default (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/home/resume" element={<Resume />}></Route> */}
      </Routes>
    </Router>
  </div>
);