import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../constants/styles';

const Resumen = ({
  presupuesto,
  totalEgreso,
  showMP,
  setShowMP,
  showME,
  setShowME,
}) => {
  /* METODO PARA DAR FORMATO A LOS MONTOS $0.00 */
  const formatMoney = (monto) => {
    return '$ ' + parseFloat(monto >= 0 && monto).toFixed(2);
  };

  /*  METODO PARA OBTENER EL DISPONIBLE DE LA RESTA DE PRESUPUESTO CON EL TOTAL EGRESO */
  const getDisponible = (val1, val2) => {
    return formatMoney(parseFloat(parseFloat(val1) - parseFloat(val2)));
  };

  return (
    <View style={styles.resumenContainer}>
      <View style={styles.rowContainer}>
        {/* PRESUPUESTO */}
        <TouchableOpacity onPress={() => setShowMP(!showMP)}>
          <Text style={styles.textPE}>Presupuesto</Text>
          <Text style={[styles.textBold, {color: '#219ef3'}]}>
            {formatMoney(presupuesto)}
          </Text>
        </TouchableOpacity>

        {/* EGRESO */}
        <TouchableOpacity onPress={() => setShowME(!showME)}>
          <Text style={styles.textPE}>Egreso</Text>
          <Text style={[styles.textBold, {color: '#f0624d'}]}>
            {formatMoney(totalEgreso)}
          </Text>
        </TouchableOpacity>
      </View>

      {/* DISPONIBLE */}
      <View style={styles.disponibleContainer}>
        <Text style={[styles.textBold, {color: 'gray'}]}>Disponible</Text>
        <Text style={[styles.textBold, {color: 'green'}]}>
          {getDisponible(presupuesto, totalEgreso)}
        </Text>
      </View>
    </View>
  );
};

export default Resumen;
