import React, { useEffect, useState } from "react";
import axios from 'axios';



const CityData = (props) => {

  const [saat, setSaat] = useState(0);
  const [ilceler, setIlceler] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`/${props.cityName}`);
      console.log(res.data[0])
      setSaat(res.data[0].saat);
      setIlceler(res.data[0].ilceler);
    }
    getData();
  }, [props]);


  const renderedData = ilceler.map((ilce, index) => {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-start" key={index}>
        <div className="ms-2 me-auto">
          <div className="fw-bold">{ilce}</div>
        </div>
        <span className="badge bg-primary rounded-pill">{saat}</span>
      </li>
    );
  })


  return (
    <ul className="list-group mt-3" style={{ width: "500px" }}>
      {renderedData}
    </ul>
  );
}

export default CityData;