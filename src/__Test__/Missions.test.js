import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../redux/configueStore';
import Missions from '../components/Missions';

describe('Missions', () => {
  it('should render the missions list', () => {
    const mission = {
      id: 1,
      mission_name: 'John',
      description: 'Missions Description',
      joined: false,
    };
    const missions = render(
      <Provider store={store}>
        <Missions mission={mission} reserved={mission.reserved} />
      </Provider>,
    );
    expect(missions).toMatchSnapshot();
  });
});
