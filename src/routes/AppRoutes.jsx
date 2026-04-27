import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePortal = lazy(() => import("../pages/HomePortal"));
const DefenceAcademy = lazy(() => import("../pages/DefenceAcademy"));
const PublicSchool = lazy(() => import("../pages/PublicSchool"));
const SniperClasses = lazy(() => import("../pages/SniperClasses"));
const NotFound = lazy(() => import("../pages/NotFound"));
const About = lazy(() => import("../pages/About"));
const Results = lazy(() => import("../pages/Results"));
const FeeStructure = lazy(() => import("../pages/FeeStructure"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Contact = lazy(() => import("../pages/Contact"));

function RouteFallback() {
  return (
    <div
      aria-hidden="true"
      style={{
        minHeight: "60vh",
        background: "linear-gradient(120deg, #f5f7fa 0%, #eef2f7 100%)",
      }}
    />
  );
}

function AppRoutes() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<HomePortal />} />
        <Route path="/defence" element={<DefenceAcademy />} />
        <Route path="/school" element={<PublicSchool />} />
        <Route path="/classes" element={<SniperClasses />} />
        <Route path="/about" element={<About />} />
        <Route path="/results" element={<Results />} />
        <Route path="/fees" element={<FeeStructure />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
