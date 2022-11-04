import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Header/Navbar";
import ShowDetails from "./components/Show/ShowDetails";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/details/:id" element={<ShowDetails></ShowDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
