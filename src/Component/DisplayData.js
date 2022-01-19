import React, { useContext } from 'react';
import { multiStepContext } from '../StepContext';

const DisplayData = () => {
  const { finalData } = useContext(multiStepContext);
  return (
    <div>
      {finalData.map((data) => (
        // <h1 key={data.name}>
        //   <p>name:{data.name}</p>
        //   <p>email:{data.email}</p>
        //   <p>country:{data.country1}</p>
        //   {/* <p>country:{data.country}</p> */}
        //   <p>gender:{data.gender}</p>

        //   <p>state:{data.state}</p>
        //   <p>clg name:{data.cname}</p>
        //   <p>course:{data.course}</p>
        //   <p>refferalcode:{data.refferal}</p>
        //   <p>framework:{data.framework}</p>
        //   <p>price:{data.price}</p>
        // </h1>
        <table key={data.email}>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>Country</th>
            <th>gender</th>
            <th>state</th>
            <th>clg name</th>
            <th>course</th>
            <th>refferalcode</th>
            <th>framework</th>
            <th>price</th>
          </tr>
          <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.country1}</td>
            <td>{data.gender}</td>
            <td>{data.state}</td>
            <td>{data.cname}</td>
            <td> {data.course}</td>
            <td>{data.refferal}</td>
            <td>{data.framework}</td>
            <td>{data.price}</td>
          </tr>
        </table>
      ))}
    </div>
  );
};

export default DisplayData;
