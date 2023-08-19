import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const FrameOneEight = React.lazy(() => import("pages/FrameOneEight"));
const FrameOneThree = React.lazy(() => import("pages/FrameOneThree"));
const FrameOneSix = React.lazy(() => import("pages/FrameOneSix"));
const FrameOneTwo = React.lazy(() => import("pages/FrameOneTwo"));
const FrameOneOne = React.lazy(() => import("pages/FrameOneOne"));
const FrameOneFour = React.lazy(() => import("pages/FrameOneFour"));
const FrameOne = React.lazy(() => import("pages/FrameOne"));
const FrameOneSeven = React.lazy(() => import("pages/FrameOneSeven"));
const FrameOneFive = React.lazy(() => import("pages/FrameOneFive"));
const FrameTen = React.lazy(() => import("pages/Frame10"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<FrameOneFive />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/frameonefive" element={<FrameOneFive />} />
          <Route path="/frameoneseven" element={<FrameOneSeven />} />
          <Route path="/frameone" element={<FrameOne />} />
          <Route path="/frameonefour" element={<FrameOneFour />} />
          <Route path="/frameoneone" element={<FrameOneOne />} />
          <Route path="/frameonetwo" element={<FrameOneTwo />} />
          <Route path="/frameonesix" element={<FrameOneSix />} />
          <Route path="/frameonethree" element={<FrameOneThree />} />
          <Route path="/frameoneeight" element={<FrameOneEight />} />
          <Route path="/frameten" element={<FrameTen />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
