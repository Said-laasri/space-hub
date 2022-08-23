import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Missions() {
  return (
    <Table striped bordered hover size="lg">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Thaicom</td>
          <td>Otto</td>
          <div className="col-md-4">
            <tr>
              <Button variant="primary">NOT A MEMBER</Button>
              {' '}
              <Button variant="outline-secondary">Join Mission</Button>
              {' '}
            </tr>
          </div>
        </tr>
        <tr>
          <td>Telstar</td>
          <td>Otto</td>
          <div className="col-md-4">
            <tr>
              <Button variant="primary">NOT A MEMBER</Button>
              {' '}
              <Button variant="outline-secondary">Join Mission</Button>
              {' '}
            </tr>
          </div>
        </tr>
      </tbody>
    </Table>
  );
}

export default Missions;
