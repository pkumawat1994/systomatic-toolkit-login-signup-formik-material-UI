import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Welcome from "../pages/welcome/Welcome";
const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Welcome />} />

        <Route path={"/register"} element={<Register />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
      ;
    </>
  );
};
export default AllRoute;
