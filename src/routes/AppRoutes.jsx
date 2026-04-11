import { Routes, Route } from "react-router-dom";
import HomePortal from "../pages/HomePortal";
import DefenceAcademy from "../pages/DefenceAcademy";
import PublicSchool from "../pages/PublicSchool";
import SniperClasses from "../pages/SniperClasses";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Results from "../pages/Results";
import FeeStructure from "../pages/FeeStructure";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/"        element={<HomePortal />} />
      <Route path="/defence" element={<DefenceAcademy />} />
      <Route path="/school"  element={<PublicSchool />} />
      <Route path="/classes" element={<SniperClasses />} />
      <Route path="/about"   element={<About />} />
      <Route path="/results" element={<Results />} />
      <Route path="/fees"    element={<FeeStructure />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*"        element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;