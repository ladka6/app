import React from "react";

const DistrictItem = ({ neighbourhood, saat, index }) => {

  console.log(neighbourhood);

  return (
    <tr>
      <th scope="row">{index}</th>
      <th>{neighbourhood}</th>
      <th>{saat}</th>
    </tr>


  )
}

export default DistrictItem;