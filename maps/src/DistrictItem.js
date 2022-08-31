import React from "react";

const DistrictItem = ({ neighbourhood, saat, index }) => {

  return (
    <tr>
      <th scope="row">{index}</th>
      <th>{neighbourhood}</th>
      <th>{saat}</th>
    </tr>


  )
}

export default DistrictItem;