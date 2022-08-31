import React, { useEffect, useState } from "react";
import axios from "axios";
import DistrictItem from "./DistrictItem";

const DistrictData = (props) => {

  const [saat, setSaat] = useState(0);
  const [neighbourhoods, setNeighbourhoods] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`/${props.cityName}/${props.ilce}`);
      setSaat(res.data[0].saat);
      setNeighbourhoods(res.data[0].mahalle);
    }
    getData()
  }, [props])

  const renderedData = neighbourhoods.map((neighbourhood, index) => {
    return <DistrictItem neighbourhood={neighbourhood} saat={saat} index={index + 1} />
  })

  return (
    <div id={props.ilce} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionData">
      <div className="accordion-body py-2 px-0">
        <div >
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Mahalle</th>
                <th scope="col">Saat</th>
              </tr>
            </thead>
            <tbody >
              {renderedData}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DistrictData;