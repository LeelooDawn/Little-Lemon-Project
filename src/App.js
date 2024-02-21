import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/NavBar/Nav";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
