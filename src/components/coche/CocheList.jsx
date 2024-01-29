// CocheList.jsx
import React, { useEffect, useState } from "react";
import { getCoches, deleteCoche } from "../../services/cocheService";
import { Link } from "react-router-dom";
import CocheDetail from "./CocheDetail"; 

const CocheList = () => {
  const [coches, setCoches] = useState([]);
  const [selectedCoche, setSelectedCoche] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await getCoches();
        setCoches(response.data);
      } catch (error) {
        console.error("Error al obtener coches:", error);
      }
    };

    obtenerDatos();
  }, []);

  const deleteCar = (e) => {
    let cocheId = e.target.id;
    deleteCoche(cocheId)
      .then(() => {
        setCoches(coches.filter((coche) => coche._id !== cocheId));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="coches">
      <div className="row">
        <br></br>
        {coches.map((coche, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{coche.marca}</h5>
                <p className="card-text">{coche.modelo}</p>
                <Link to={`/coches/?id=${coche._id}`} style={{ margin: "10px" }} className="btn btn-primary" onClick={() => setSelectedCoche(coche)}>Ver detalles</Link>
                <Link to={`/coches/edit/${coche._id}`} className="btn btn-warning">Editar</Link>
                <button className="btn btn-danger" id={coche._id} onClick={deleteCar}>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedCoche && <CocheDetail coche={selectedCoche} />}
    </div>
  );
};

export default CocheList;
