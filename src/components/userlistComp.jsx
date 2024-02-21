import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemComp from "./itemComp";
import InputsearchComp from "./InputsearchComp";
import { useDispatch } from "react-redux";
import { getUserdata } from "../features/redux/reduxSlice";
import "../styles/userlistComp.css";

const UserlistComp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((res) => {
        console.log(res.data);
        dispatch(getUserdata(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="userlistComp-container">
      <div className="userlistComp">
        <InputsearchComp />
        <div className="userlistComp-space" />
        <ItemComp />
      </div>
    </div>
  );
};

export default UserlistComp;
