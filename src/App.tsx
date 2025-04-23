import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Toaster position='top-center' />
    </>
  );
}

export default App;
