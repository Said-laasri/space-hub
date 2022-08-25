import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

function Myprofile() {
  const missions = useSelector((state) => state.mission);
  const Missions = missions.filter((mission) => mission.reserved);

  const rockets = useSelector((state) => state.rocket);
  const Rockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="profile d-flex">
      <div className="misssion-joined">
        <h4>My Missions</h4>
        <ListGroup>
          {Missions.map((v) => (
            <ListGroup.Item key={v.id}>{v.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="rocket-reserved">
        <h4>My Rockets</h4>
        <ListGroup>
          {Rockets.map((v) => (
            <ListGroup.Item key={v.id}>{v.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default Myprofile;
