import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CourseDetails from "./pages/CourseDetails";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/coursedetails/:id" element={<CourseDetails />} />
          <Route path="*" element={<>NO ROOT WITH THIS PATH</>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;