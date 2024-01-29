// CocheDetail.jsx
import React from "react";

const CocheDetail = ({ coche }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{coche.marca}</h5>
          <p className="card-text">{coche.modelo}</p>
          <p className="card-text">{coche.anio}</p>
          <p className="card-text">{coche.color}</p>
        </div>
      </div>
    </div>
  );
};

export default CocheDetail;
