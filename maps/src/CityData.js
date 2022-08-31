import React, { useEffect, useState } from "react";
import axios from 'axios';
import CityItem from './CityItem';
import DistrictData from "./DistrictData";

const CityData = (props) => {

  const [saat, setSaat] = useState(0);
  const [ilceler, setIlceler] = useState([]);
  // const [district, setDistrict] = useState('');

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`/${props.cityName}`);
      setSaat(res.data[0].saat);
      setIlceler(res.data[0].ilceler);
    }
    getData();
  }, [props]);


  const renderedData = ilceler.map((ilce, index) => {
    return (
      <React.Fragment key={index} >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <CityItem ilce={ilce} saat={saat} />
          </h2>
        </div>
        <DistrictData cityName={props.cityName} ilce={ilce} />
      </React.Fragment>
      //<CityItem ilce={ilce} saat={saat} key={index} />
    );
  })


  return (
    <div className="accordion mt-3" id="accordionData" style={{ width: "500px" }}>
      {renderedData}
    </div>
  );
}

export default CityData;