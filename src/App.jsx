import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DonatePage from "./pages/DonatePage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
    </BrowserRouter>
  );
}
