import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { getMission } from '../redux/missions';
import MissionOne from '../missionOne';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission);

  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);

  return (
    <Table striped bordered hover size="lg">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      {missions.map((mission) => (
        <MissionOne
          key={mission.id}
          id={mission.id}
          name={mission.name}
          description={mission.description}
          reserved={mission.reserved}
        />
      ))}
    </Table>
  );
}

export default Missions;
