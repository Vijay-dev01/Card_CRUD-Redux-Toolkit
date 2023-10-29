import Create from "./Components/Create";
import Home from "./Components/Home";
import Update from "./Components/Update";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
