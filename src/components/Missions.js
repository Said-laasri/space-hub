import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { getMission } from '../redux/missions/missions';
import MissionOne from './missionOne';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission);

  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);

  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <div className="theader">
          <div className="ul">
            <p className="mi">Mission</p>
            <p className="de">Description</p>
            <p className="st">Status</p>
          </div>
        </div>
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
    </div>
  );
}

export default Missions;
