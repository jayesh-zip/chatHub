import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import ProtectRoute from "./components/auth/ProtectRoute"; // Commented as no need for protected routes for now
// import { LayoutLoader } from "./components/layout/Loaders";

// Lazy loading the components
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {
  return (
    <BrowserRouter>
      {/* <Suspense fallback={<LayoutLoader />}> */}
        <Routes>
          {/* Display Home and Login routes only */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* If any other routes are accessed, render the Home page */}
          <Route path="*" element={<Home />} />
        </Routes>
      {/* </Suspense> */}

      <Toaster position="bottom-center" />
    </BrowserRouter>
  );
};

export default App;
