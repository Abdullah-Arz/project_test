import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUserdata } from "../features/redux/reduxSlice";
import "../styles/InputsearchComp.css";

const InputsearchComp = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.redux.apidata);
  const [searchTerm, setSearchTerm] = useState("");
  const [userNotFound, setUserNotFound] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() === "") {
      dispatch(searchUserdata(data));
      setUserNotFound(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchData = data.filter((item) => item.login.includes(searchTerm));
    if (searchData.length === 0) {
      setUserNotFound(true);
    } else {
      dispatch(searchUserdata(searchData));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="inputsearch_maindiv">
        <input
          placeholder="Search..."
          name="name"
          value={searchTerm}
          onChange={handleChange}
          className="inputsearch_input"
        />
        <button type="submit" className="inputsearch_button">
          Search
        </button>
      </form>
      {userNotFound && <p className="user-not-found">User not found</p>}
    </>
  );
};

export default InputsearchComp;
