import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ZaloButton from "./components/ZaloButton";

import Home from "./routes/Home";
import Pricing from "./routes/Pricing";
import Contact from "./routes/Contact";
import LocationPage from "./routes/LocationPage";
import ServicePage from "./routes/ServicePage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bang-gia" element={<Pricing />} />
        <Route path="/lien-he" element={<Contact />} />

        {/* SEO khu vực */}
        <Route path="/khu-vuc/:slug" element={<LocationPage />} />

        {/* Trang dịch vụ đơn giản (dùng để đi link từ Home) */}
        <Route path="/dich-vu/:slug" element={<ServicePage />} />
      </Routes>
      <ZaloButton />
      <Footer />
    </>
  );
}
