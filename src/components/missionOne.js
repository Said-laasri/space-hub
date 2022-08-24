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
    <tbody>
      <tr>
        <td className="name">{name}</td>
        <td>{description}</td>
        {!reserved && <span>not a member</span>}
        {reserved && <span className="member">active member</span>}
        <td className="col-md-4">
          <Button
            type="button"
            id={id}
            className="btn join"
            onClick={toggleMission}
            variant="outline-secondary"
          >
            {btnText}
          </Button>
        </td>
      </tr>
    </tbody>
  );
}

MissionOne.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionOne;
