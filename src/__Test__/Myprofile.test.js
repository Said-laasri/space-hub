import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configueStore';
import Myprofile from '../components/Myprofile';

describe('Missions profile', () => {
  it('should render profile', () => {
  const ListGroup = {
    title: 'Myprofile',
    items: [
      {
        title: 'Myprofile',
        description: 'Myprofile',
        },
        ],
  }
  render (
    <Provider store={store}>
      <Myprofile store={store}/>
    </Provider>
  )
  expect(ListGroup).toMatchSnapshot();
  });
  });

  