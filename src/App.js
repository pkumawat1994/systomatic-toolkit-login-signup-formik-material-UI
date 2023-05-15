import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllRoute from "./route/AllRoute";
import Header from "./pages/header/Header";
import { BrowserRouter } from "react-router-dom";
// import Table from "./components/adminComponents/Table";
function App() {
  return (
    <>
      <BrowserRouter>

      <Header />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <AllRoute />
      </BrowserRouter>

      {/* <Table /> */}
    </>
  );
}

export default App;
