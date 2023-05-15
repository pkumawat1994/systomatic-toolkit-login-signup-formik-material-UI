import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { AdminCrud } from "../../redux";
import stock from "../../assets/images/stock.jpg";

const WelcomePage = () => {
  // const [data,setData]=useState([])
  let dispatch = useDispatch();
  const resData = useSelector((state) => state?.AdminCrudSlice?.data);
  console.log(78, resData);
  useEffect(() => {
    dispatch(AdminCrud());
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <img src={stock} alt="stock-image" className="image" />
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
