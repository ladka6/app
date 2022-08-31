import React from "react";

const CityItem = ({ ilce, saat, }) => {

  return (
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${ilce}`} aria-expanded="false" aria-controls={ilce} >
      <div className="justify-content ms-2 me-auto">
        <div className="fw-bold">{ilce}</div>
      </div>
      <span className="badge bg-primary rounded-pill">{saat}</span>
    </button>
  )
}

export default CityItem;