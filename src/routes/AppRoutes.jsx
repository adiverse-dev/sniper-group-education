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

const PAGE_ROUTES = [
  { path: "/", element: <HomePortal /> },
  { path: "/defence", element: <DefenceAcademy /> },
  { path: "/school", element: <PublicSchool /> },
  { path: "/classes", element: <SniperClasses /> },
  { path: "/about", element: <About /> },
  { path: "/results", element: <Results /> },
  { path: "/fees", element: <FeeStructure /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/contact", element: <Contact /> },
];

function languagePaths(basePath) {
  if (basePath === "/") return ["/en", "/hi"];
  return [`/en${basePath}`, `/hi${basePath}`];
}

function AppRoutes() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        {PAGE_ROUTES.map((routeItem) => (
          <Route key={`base-${routeItem.path}`} path={routeItem.path} element={routeItem.element} />
        ))}

        {PAGE_ROUTES.flatMap((routeItem) =>
          languagePaths(routeItem.path).map((localizedPath) => (
            <Route
              key={`${localizedPath}`}
              path={localizedPath}
              element={routeItem.element}
            />
          ))
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;

