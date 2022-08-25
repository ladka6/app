import React, { useEffect, useState } from "react";
import axios from 'axios';
import CityItem from './CityItem';


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
    return <CityItem ilce={ilce} saat={saat} key={index} onDistSelect={props.onDistSelect} />
  })


  return (
    <div className="list-group mt-3" style={{ width: "500px" }}>
      {renderedData}
    </div>
  );
}

export default CityData;