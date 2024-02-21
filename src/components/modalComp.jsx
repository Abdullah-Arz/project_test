import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

const UserModal = ({ state_data, show, onHide }) => {
  const [data, set_data] = useState();

  useEffect(() => {
    if (state_data) {
      axios
        .get(`https://api.github.com/users/${state_data.login}`)
        .then((res) => {
          console.log("modal user---- ", res.data);
          set_data(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [state_data]);

  console.log("User ---- ", state_data);
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: "#007bff" }}
        >
          {data?.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ textAlign: "center" }}>
          <img
            src={data?.avatar_url}
            alt={data?.name}
            style={{
              width: "150px",
              borderRadius: "50%",
              marginBottom: "10px",
            }}
          />
        </div>
        <p style={{ fontSize: "16px", marginBottom: "5px" }}>
          Followers: {data?.followers}
        </p>
        <p style={{ fontSize: "16px", marginBottom: "5px" }}>
          Following: {data?.following}
        </p>
        <p style={{ fontSize: "16px", marginBottom: "5px" }}>
          Location: {data?.location}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModal;
