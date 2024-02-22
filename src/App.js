import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/NavBar/Nav";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
