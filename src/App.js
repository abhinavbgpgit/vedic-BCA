import Navbar from "../src/components/Navbar";

import logo from "./logo.svg";
import Campus from "./pages/Campus";
import Events from "./pages/Events";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Syllabus from "./pages/Syllabus";
import Result from "./pages/Result";
import ExamPage from "./pages/ExamPage";

function App() {
  // amanraj
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/campus" element={<Campus />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/syllabus" element={<Syllabus />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/exam" element={<ExamPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
