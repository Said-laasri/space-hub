import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { ToggleMission } from '../redux/missions/missions';

function MissionOne(props) {
  const {
    id, name, description, reserved,
  } = props;

  const dispatch = useDispatch();

  const toggleMission = () => {
    dispatch(ToggleMission(id));
  };

  const btnText = reserved ? 'Leave Mission' : 'Join Mission';
  return (
    <div className="body-mis">
      <article>
        <h2 className="name">{name}</h2>
        <p className="description">{description}</p>
        <div className="buttonS">
          <button type="button" className="span">
            {!reserved && 'NOT A MEMBER'}
            {reserved && 'Active member'}
          </button>
        </div>
        <div className="btn-right">
          <Button
            type="button"
            id={id}
            className="btn join"
            onClick={toggleMission}
          >
            {btnText}
          </Button>
        </div>
      </article>
    </div>
  );
}

MissionOne.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionOne;
