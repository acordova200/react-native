import {SET_PRESUPUESTO, SET_EGRESO} from '../types';

export default (state, action) => {
  const {type, payload} = action;
  switch (type) {
    case SET_PRESUPUESTO:
      return {...state, presupuesto: payload};

    case SET_EGRESO:
      return {...state, egresos: [...state.egresos, {...payload}]};
    default:
      return state;
  }
};
