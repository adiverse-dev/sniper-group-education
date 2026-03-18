import { Routes, Route } from "react-router-dom";

// ── Existing Pages ──
import HomePortal from "../pages/HomePortal";
import DefenceAcademy from "../pages/DefenceAcademy";
import PublicSchool from "../pages/PublicSchool";
import SniperClasses from "../pages/SniperClasses";
import NotFound from "../pages/NotFound";


// ── New Pages  ──
 import About from "../pages/About";
 import Results from "../pages/Results";
 import FeeStructure from "../pages/FeeStructure";
 import Gallery from "../pages/Gallery";
 import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Routes>

      {/* ── Main ── */}
      <Route path="/"         element={<HomePortal />} />

      {/* ── Wing Pages ── */}
      <Route path="/defence"  element={<DefenceAcademy />} />
      <Route path="/school"   element={<PublicSchool />} />
      <Route path="/classes"  element={<SniperClasses />} />

      {/* ── New Pages  ── */}

      {<Route path="/about"    element={<About />} /> }
      {<Route path="/results"  element={<Results />} /> }
      { <Route path="/fees"     element={<FeeStructure />} /> }
      {<Route path="/gallery"  element={<Gallery />} /> }
      {<Route path="/contact"  element={<Contact />} /> }

      {/* ── 404 ── */}
      <Route path="*"         element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;