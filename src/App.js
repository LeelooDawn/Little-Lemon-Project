import { Routes, Route } from "react.router.dom";
import "./App.css";
import Nav from "./components/NavBar/Nav";
import Homepage from "./pages/Homepage";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
