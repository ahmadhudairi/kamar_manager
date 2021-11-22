import React from "react";
import { Link } from "react-router-dom";
import KamarCard from "./KamarCard";

const KamarList = (props) => {
  const deleteKamarHandler = (id) => {
    props.getKamarId(id);
  };

  const renderKamarList = props.kamars.map((kamar) => {
    return (
      <KamarCard
        kamar={kamar}
        key={kamar.id}
        clickHandler={deleteKamarHandler}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Kamar list
        <Link to="/add">
          <button className="ui button blue right">Add Kamar</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderKamarList}</div>
    </div>
  );
};

export default KamarList;
