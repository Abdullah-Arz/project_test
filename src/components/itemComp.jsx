import React, { useState } from "react";
import "../styles/userlistComp.css";
import { useSelector } from "react-redux";
import Modal from "./modalComp";

const ItemComp = () => {
  const data = useSelector((state) => state.redux.apidata);
  const searchuser = useSelector((state) => state.redux.searchuser);
  console.log("User ---- ", searchuser);

  const [modalShow, setModalShow] = useState(false);
  const [state_data, setState_data] = useState(false);

  const handleModal = (user) => {
    setModalShow(true);
    setState_data(user);
  };

  return (
    <>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        state_data={state_data}
      />

      <div>
        {/* <h1>Data Table from API</h1> */}
        <table>
          <thead>
            <tr>
              <th className="userlistComp_td">ID</th>
              <th className="userlistComp_td">Name</th>
              <th className="userlistComp_td">Image</th>
              <th className="userlistComp_td">Github Link</th>
              {/* Add more table headings if needed */}
            </tr>
          </thead>
          <tbody className="userlistComp_tbody">
            {searchuser.length > 0
              ? searchuser?.map((item) => (
                  <tr key={item.id} className="userlistComp_tr">
                    <td className="userlistComp_td">{item.id}</td>
                    <td
                      className="userlistComp_td"
                      onClick={() => handleModal(item)}
                    >
                      {item.login}
                    </td>
                    <td
                      className="userlistComp_td"
                      onClick={() => handleModal(item)}
                    >
                      <img
                        src={item.avatar_url}
                        alt="image..."
                        className="userlistComp_img"
                      />
                    </td>
                    <td className="userlistComp_td">
                      <a href={item.html_url}>{item.html_url}</a>
                    </td>
                  </tr>
                ))
              : data.map((item) => (
                  <tr key={item.id} className="userlistComp_tr">
                    <td className="userlistComp_td">{item.id}</td>
                    <td
                      className="userlistComp_td"
                      onClick={() => handleModal(item)}
                    >
                      {item.login}
                    </td>
                    <td
                      className="userlistComp_td"
                      onClick={() => handleModal(item)}
                    >
                      <img
                        src={item.avatar_url}
                        alt="image..."
                        className="userlistComp_img"
                      />
                    </td>
                    <td className="userlistComp_td">
                      <a href={item.html_url}>{item.html_url}</a>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ItemComp;
