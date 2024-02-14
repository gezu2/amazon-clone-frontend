/* eslint-disable react-hooks/exhaustive-deps */
import {useContext, useEffect } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, msg, redirect }) => {
    const navigate = useNavigate();
    const [{ user } ]= useContext(DataContext);
  
    useEffect(() => {
      if (!user) {
        navigate("/auth", { state: { msg ,redirect} });

      }
    }, [ user]);


  return children
  }
export default ProtectedRoute
