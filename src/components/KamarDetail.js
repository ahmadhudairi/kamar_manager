import React from "react";
import { Link } from "react-router-dom";
import room from "../images/room2.jpg";

const KamarDetail = (props) => {
  const { nama_kamar, tarif, jenis_kamar, status } = props.location.state.kamar;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={room} alt="user" />
        </div>
        <div className="content">
          <div className="header">{nama_kamar}</div>
          <div className="description">Status: {status}</div>
          <div className="description">Jenis Kamar: {jenis_kamar}</div>
          <div className="description">Tarif: Rp. {tarif}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default KamarDetail;
