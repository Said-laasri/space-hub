import { createAsyncThunk } from '@reduxjs/toolkit';
import MISSION_API from '../missionApi/MISSION_API';

const ADD_MISSION = 'spacehub/missions/ADD_MISSION';
const JOIN_MISSION = 'spacehub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'spacehub/missions/LEAVE_MISSION';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_MISSION}/fulfilled`:
      return action.payload;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const addMission = (missionItem) => ({
  type: ADD_MISSION,
  payload: missionItem,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

const getMission = createAsyncThunk(ADD_MISSION, async () => {
  const feedBack = await fetch(MISSION_API);
  const data = await feedBack.json();
  const missionItem = data.map((mission) => ({
    id: mission.id,
    name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
  return missionItem;
});

export { getMission };
