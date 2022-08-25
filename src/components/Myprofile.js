import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

function Myprofile() {
  const missionsList = useSelector((state) => state.mission.filter((mission) => mission.reserved));

  const rocketsList = useSelector((state) => state.rocket.filter((rocket) => rocket.reserved));
  return (
    <div className="profile d-flex">
      <div className="misssion-joined2">
        <div className="mission-joined">
          <h4>Missions</h4>
          <ListGroup>
            {missionsList.map((v) => (
              <ListGroup.Item key={v.id}>
                <h5>{v.name}</h5>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="rocket-reserved">
          <h4>My Rockets</h4>
          <ListGroup>
            {rocketsList.map((v) => (
              <ListGroup.Item key={v.id}>
                <h5>{v.name}</h5>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
}

export default Myprofile;
