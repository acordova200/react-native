import React from 'react';
import PresupuestoState from './src/context/Presupuesto/PresupuestoState';
import PresupuestoScreen from './src/screens/PresupuestoScreen';

const App = () => {
  return (
    <PresupuestoState>
      <PresupuestoScreen />
    </PresupuestoState>
  );
};

export default App;
