import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRockets } from '../redux/rockets/rockets';
import Rocket from './Rocket';

let isInitial = true;

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket);

  useEffect(() => {
    if (isInitial) {
      dispatch(getRockets());
      isInitial = false;
    }
  }, [dispatch]);

  return (
    <div className="rocket">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          img={rocket.img}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
}

export default Rockets;
