import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';

import PresupuestoContext from '../context/Presupuesto/PresupuestoContext';
import Dashboard from '../components/Dashboard';
import EgresoModal from '../components/EgresoModal';
import PresupuestoModal from '../components/PresupuestoModal';
import Resumen from '../components/Resumen';
import styles from '../constants/styles';

const PresupuestoScreen = () => {
  const {presupuesto, egresos, setPresupuesto, setEgreso} = useContext(
    PresupuestoContext,
  );
  const [totalEgreso, setTotalEgreso] = useState(0);

  /*    VARIABLE PARA MOSTRAR O NO MOSTRAR MODAL PRESUPUESTO */
  const [showMP, setShowMP] = useState(false);
  /*    VARIABLE PARA MOSTRAR O NO MOSTRAR MODAL EGRESO */
  const [showME, setShowME] = useState(false);

  /*  CADA VEZ QUE SE REGISTRE UN EGRESO REALIZARA EL TOTAL DE EGRESOS */
  useEffect(() => {
    let totalTemp = 0;

    egresos.map((egreso) => {
      totalTemp += parseFloat(egreso.monto);
    });
    setTotalEgreso(totalTemp);
  }, [egresos]);

  return (
    <View style={styles.container}>
      <EgresoModal
        showME={showME}
        setShowME={setShowME}
        setEgreso={setEgreso}
        presupuesto={presupuesto}
        totalEgreso={totalEgreso}
      />
      <PresupuestoModal
        showMP={showMP}
        setShowMP={setShowMP}
        setPresupuesto={setPresupuesto}
      />
      <Resumen
        presupuesto={presupuesto}
        totalEgreso={totalEgreso}
        showMP={showMP}
        setShowMP={setShowMP}
        showME={showME}
        setShowME={setShowME}
      />
      <Dashboard
        presupuesto={presupuesto}
        totalEgreso={totalEgreso}
        egresos={egresos}
      />
    </View>
  );
};

export default PresupuestoScreen;
