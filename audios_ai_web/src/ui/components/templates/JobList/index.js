import React from "react";
import { Table } from "reactstrap";

const JobList = ({JobsData}) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col rounded border p-4 m-4">
          <Table responsive hover className="mx-auto">
            <thead>
              <tr>
                <th>Archivo</th>
                <th>Estado</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default JobList;
