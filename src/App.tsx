import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { AuthGuard, CircularProgress, Header } from "./components";
import useLoadAuth from "./hooks/useLoadAuth";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const Verify = lazy(() => import("./pages/Verify"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  useLoadAuth();

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

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Toaster position='top-center' />
    </>
  );
}

export default App;
