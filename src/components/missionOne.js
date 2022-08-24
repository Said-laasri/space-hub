import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { joinMission, leaveMission } from './redux/missions';

function MissionOne(props) {
  const {
    id, name, description, reserved,
  } = props;

  const dispatch = useDispatch();

  return (
    <>
      <tbody>
        <tr>
          <td className="name">{name}</td>
          <td>{description}</td>
          <td className="col-md-4">
            {
              reserved
                ? (
                  <span className="active">
                    ACTIVE MEMBER
                  </span>
                )

                : (
                  <span className="not-active">
                    NOT A MEMBER
                  </span>
                )
            }
            {
              reserved
                ? (
                  <Button
                    type="button"
                    className="btn join"
                    onClick={() => dispatch(joinMission(id))}
                    variant="outline-secondary"
                  >
                    Join Mission
                  </Button>
                )
                : (
                  <button
                    type="button"
                    className="btn join"
                    onClick={() => dispatch(leaveMission(id))}
                    variant="outline-secondary"
                  >
                    Leave Mission
                  </button>
                )
            }
          </td>
        </tr>
      </tbody>
    </>
  );
}

MissionOne.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

MissionOne.defaultProps = {
  reserved: false,
};

export default MissionOne;
