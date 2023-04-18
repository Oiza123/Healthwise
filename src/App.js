import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import "./App.css";
import { StrictMode } from "react";
import NoPage from "./components/NoPage/NoPage";
import AddEdit from "./components/Form/AddEdit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Help from "./components/Contact/Help";
import Search from "./components/Search/Search";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Info" element={<Info />} />
            <Route path="/add" element={<AddEdit />} />
            <Route path="/update/:id" element={<AddEdit />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
