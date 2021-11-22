import React from "react";
import { Link } from "react-router-dom";
import gambar from "../images/room.png";
const KamarCard = (props) => {
  const { id, nama_kamar, status } = props.kamar;
  return (
    <div className="item">
      <img className="ui avatar image" src={gambar} alt="user" />
      <div className="content">
        <Link to={{ pathname: `/kamar/${id}`, state: { kamar: props.kamar } }}>
          <div>
            Nama Kamar:
            <strong> {nama_kamar} </strong>
          </div>
          <div>
            Status:
            <strong> {status} </strong>
          </div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHandler(id)}
      ></i>

      <Link to={{ pathname: `/edit`, state: { kamar: props.kamar } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default KamarCard;
