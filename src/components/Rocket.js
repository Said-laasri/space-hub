import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import React from 'react';
import { toggleReserved } from '../redux/rockets/rockets';

function Rocket(props) {
  const {
    id, name, description, img, reserved,
  } = props;

  const dispatch = useDispatch();

  const toggleReservedRocket = () => {
    dispatch(toggleReserved(id));
  };

  const btnText = reserved ? 'Cancel Reservation' : 'Reserve Rocket';

  return (
    <div>
      <img src={img} alt="rocket_image" />
      <h3>{name}</h3>
      <p>
        <span>{reserved && 'Reserved'}</span>

        {description}
      </p>
      <button type="button" id={id} onClick={toggleReservedRocket}>
        {btnText}
      </button>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
