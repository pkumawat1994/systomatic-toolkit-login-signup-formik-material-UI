import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
const AllRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Register />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
};
export default AllRoute;
