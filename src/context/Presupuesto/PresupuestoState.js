import React, {useReducer} from 'react';
import {SET_PRESUPUESTO, SET_EGRESO} from '../types';

import PresupuestoContext from './PresupuestoContext';
import PresupuestoReducer from './PresupuestoReducer';

const PresupuestoState = (props) => {
  const initialState = {
    presupuesto: 100,
    egresos: [],
  };

  const [state, dispatch] = useReducer(PresupuestoReducer, initialState);

  const setPresupuesto = (presupuesto) => {
    dispatch({
      type: SET_PRESUPUESTO,
      payload: presupuesto,
    });
  };
  const setEgreso = (egreso) => {
    dispatch({
      type: SET_EGRESO,
      payload: egreso,
    });
  };
  return (
    <PresupuestoContext.Provider
      value={{
        presupuesto: state.presupuesto,
        egresos: state.egresos,
        setPresupuesto,
        setEgreso,
      }}>
      {props.children}
    </PresupuestoContext.Provider>
  );
};
export default PresupuestoState;
