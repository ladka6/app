import React from "react";

const CityItem = ({ ilce, saat, onDistSelect }) => {


  return (
    <button className="list-group-item list-group-item-action d-flex justify-content-between align-items-start" onClick={() => onDistSelect(ilce)}>
      <div className="ms-2 me-auto">
        <div className="fw-bold">{ilce}</div>
      </div>
      <span className="badge bg-primary rounded-pill">{saat}</span>
    </button>
  )
}

export default CityItem;