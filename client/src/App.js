import "./App.scss";
import HomePage from "./pages/homepage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/about-us/AboutUs";
import ContactUs from "./pages/contact-us/ContactUs";
import MovingNavbar from "./components/moving-navbar/MovingNavbar";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <MovingNavbar />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
        </Routes>
      </BrowserRouter>
      <footer className="footer">
        {"Website Development by "}
        <u> AVAMAE</u>
      </footer>
    </>
  );
}

export default App;
