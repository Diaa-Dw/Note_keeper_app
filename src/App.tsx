import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";
import AuthGuard from "./components/AuthGuard";
import CircularProgress from "./components/CirculareProgress";
import Verify from "./pages/Verify/Verify";
import ResetPassword from "./pages/ResetPassword";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route
            path='/'
            element={
              <AuthGuard requireAuth={true}>
                <Dashboard />
              </AuthGuard>
            }
          />
          <Route
            path='/login'
            element={
              <AuthGuard requireAuth={false}>
                <Login />
              </AuthGuard>
            }
          />
          <Route
            path='/signup'
            element={
              <AuthGuard requireAuth={false}>
                <Signup />
              </AuthGuard>
            }
          />
          <Route
            path='/verify/:token'
            element={
              <AuthGuard requireAuth={false}>
                <Verify />
              </AuthGuard>
            }
          />

          <Route
            path='/resetPassword/:token'
            element={
              <AuthGuard requireAuth={false}>
                <ResetPassword />
              </AuthGuard>
            }
          />
        </Routes>
      </Suspense>
      <Toaster position='top-center' />
    </>
  );
}

export default App;
