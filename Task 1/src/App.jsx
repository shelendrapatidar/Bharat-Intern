import "./App.css";
import Home from "../src/Components/Home";
import { Success } from "./Components/Success";
import { Error } from "./Components/Error";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
