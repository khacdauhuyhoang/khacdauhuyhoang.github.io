import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Pricing from "./routes/Pricing";
import Contact from "./routes/Contact";
import ZaloButton from "./components/ZaloButton";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bang-gia" element={<Pricing />} />
        <Route path="/lien-he" element={<Contact />} />
      </Routes>
      <ZaloButton />
    </>
  );
}
