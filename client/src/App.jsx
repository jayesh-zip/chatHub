import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutLoader } from "./components/layout/Loaders";
import { Toaster } from "react-hot-toast";
import ProtectRoute from "./components/auth/ProtectRoute";

// Lazy loading components
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));


const App = () => {
  const user = true; // Mock user state for now

  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          {/* Protected routes */}
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>

          {/* Public route */}
          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      <Toaster position="bottom-center" />
    </BrowserRouter>
  );
};

export default App;
