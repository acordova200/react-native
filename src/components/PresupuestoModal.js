import React, {useState} from 'react';
import {View, Text, Modal, TextInput, Button, Alert} from 'react-native';
import styles from '../constants/styles';

const PresupuestoModal = ({showMP, setShowMP, setPresupuesto}) => {
  /* VARIABLE PARA ASIGNAR EL NUEVO PRESUPUESTO */
  const [nuevoPresupuesto, setNuevoPresupuesto] = useState(0);

  const submit = () => {
    /* VALIDAMOS QUE EL NUEVO PRESUPUESTO SEA MAYOR A 0 */
    if (nuevoPresupuesto > 0) {
      /* AGREGAMOS A NUESTRO CONTEXT EL NUEVO VALOR DE PRESUPUESTO */
      setPresupuesto(nuevoPresupuesto);
      /*  CIERRE DE MODAL PRESUPUETO */
      setShowMP(!showMP);
      /*  INICIAMOS EN 0 NUESTRA VARIABLE DE MODAL */
      setNuevoPresupuesto(0);
    } else {
      Alert.alert('Error', 'Monto Invalido');
    }
  };
  return (
    <Modal visible={showMP} transparent={true}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.modal}>
          <Text style={styles.textFields}>INGRESAR PRESUPUESTO</Text>

          {/* CAMPO PARA INGRESAR EL NUEVO PRESUPUESTO */}
          <TextInput
            placeholder={'$ 0.00'}
            keyboardType={'numeric'}
            style={styles.textInput}
            onChangeText={(value) => setNuevoPresupuesto(value)}
          />

          {/*  BOTONES DE INGRESAR Y CANCELAR */}
          <View style={styles.rowContainer}>
            <Button onPress={() => submit()} title="Ingresar" />
            <Button
              color={'red'}
              onPress={() => setShowMP(!showMP)}
              title="Cancelar"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PresupuestoModal;
