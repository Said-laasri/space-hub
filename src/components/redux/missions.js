import { createAsyncThunk } from '@reduxjs/toolkit';
import MISSION_API from '../missionApi/MISSION_API';

const ADD_MISSION = 'spacehub/missions/ADD_MISSION';
const TOGGLE_MISSION = 'spacehub/missions/TOGGLE_MISSION';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_MISSION}/fulfilled`:
      return action.payload;
    case TOGGLE_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: !mission.reserved };
      });
    default:
      return state;
  }
};

export const ToggleMission = (id) => ({
  type: TOGGLE_MISSION,
  payload: id,
});

export const addMission = (missionItem) => ({
  type: ADD_MISSION,
  payload: missionItem,
});

const getMission = createAsyncThunk(ADD_MISSION, async () => {
  const feedBack = await fetch(MISSION_API);
  const data = await feedBack.json();
  const missionItem = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
  return missionItem;
});

export { getMission };
