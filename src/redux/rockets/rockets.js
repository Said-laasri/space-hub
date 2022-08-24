import { createAsyncThunk } from '@reduxjs/toolkit';
import ROCKET_API from '../../api/recketApt';

const ADD_ROCKET = 'spacehub/rockets/ADD_ROCKET';
const TOGGLE = 'spacehub/rockets/TOGGLE';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_ROCKET}/fulfilled`:
      return action.payload;
    case TOGGLE:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
    default:
      return state;
  }
};

export const toggleReserved = (id) => ({
  type: TOGGLE,
  payload: id,
});

export const addRocket = (rocketItem) => ({
  type: ADD_ROCKET,
  payload: rocketItem,
});

const getRockets = createAsyncThunk(ADD_ROCKET, async () => {
  const feedBack = await fetch(ROCKET_API, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
  let rocketItem;
  try {
    const data = await feedBack;
    rocketItem = data.map((rocket) => ({
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      img: rocket.flickr_images[0],
      reserved: false,
    }));
  } catch {
    console.log('ERROR');
  }
  return rocketItem;
});

export { getRockets };
