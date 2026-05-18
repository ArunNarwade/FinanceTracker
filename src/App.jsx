import { Routes, Route } from "react-router-dom";
import Finance from "./pages/Finance";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Finance />} />
    </Routes>
    <Footer/>
    </>
  );
}