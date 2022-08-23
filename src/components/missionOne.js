import { useDispatch } from "react-redux";
import { PropTypes } from 'prop-types';
import React from 'react';
import { joinMission, leaveMission } from './redux/missions';

function MissionOne(props) {
  const {
    id, name, description,
  } = props;

  const dispatch = useDispatch();

  return (
    <>
    <tbody>
    <tr>
    <td className="name">{name}</td>
    <td>{description}</td>
    <div className="col-md-4">
            <tr>
              <Button variant="primary">NOT A MEMBER</Button>
              {' '}
              <Button
              type="button"
              className="btn join"
              onClick={() => dispatch(joinMission(id))}
              variant="outline-secondary"
              >
                Join Mission
                </Button>
                <Button
              type="button"
              className="btn join"
              onClick={() => dispatch(leaveMission(id))}
              variant="outline-secondary"
              >
                Leave Mission
                </Button>
              {' '}
            </tr>
          </div>
    </tr>
    </tbody>
    </>
  );
}

MissionOne.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionOne;