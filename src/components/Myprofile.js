import { useSelector } from 'react-redux';

function Myprofile() {
  const profileParts = useSelector((state) => [
    {
      RocketTitle: 'My Missions',
      data: state.missions.filter((mission) => mission.reserved),
    },
    {
      RocketTitle: 'My Rockets',
      data: state.rockets.filter((rocket) => rocket.reserved),
    },
  ]);

  return (
    <div>
      <div className="misssion-joined">
        <h4></h4>
      </div>
      <div className="rocket-reserved">
        <h4></h4>
      </div>
    </div>
  );
}

export default Myprofile;
