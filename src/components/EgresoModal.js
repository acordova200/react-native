import React, {useState} from 'react';
import {View, Text, Modal, TextInput, Button, Alert} from 'react-native';
import styles from '../constants/styles';

const EgresoModal = ({
  showME,
  setShowME,
  presupuesto,
  totalEgreso,
  setEgreso,
}) => {
  /* ESTADO INICIAL DE FORMULARIO */
  const initialState = {
    fecha: '',
    nombre: '',
    monto: 0,
  };

  /*  FORMULARIO */
  const [form, setForm] = useState(initialState);

  /*  MANEJO DE FORMULARIO SEGUN LOS INGRESOS DE DATOS */
  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  /* SUMATORIA DE TOTAL EGRESO CON MONTO INGRESADO */
  const add = (val1, val2) => {
    return parseFloat(parseFloat(val1) + parseFloat(val2)).toFixed(2);
  };

  const submit = () => {
    /* VALIDAMOS QUE NOMBRE NO ESTE VACIO Y MONTO INGRESADO SEA MAYOR A 0 */
    if (form.nombre !== '' && form.monto > 0) {
      /* VALIDAMOS QUE PRESUPUESTO SEA MENOR A LA SUMA DE TOTAL EGRESO CON EL MONTO INGRESADO */
      if (parseFloat(presupuesto) < add(totalEgreso, form.monto)) {
        /* SI LA SUMA ES MAYOR A PRESUPUESTO MOSTRARA ESTA ALERTA */
        Alert.alert('Error', 'No Cuenta con suficiente Presupuesto');
      } else {
        /* SI LA SUMA ES MENOR AGREGARA EL EGRESO A NUESTRO EGRESO EN USECONTEXT */
        setEgreso({
          nombre: form.nombre,
          fecha: new Date(),
          monto: parseFloat(form.monto).toFixed(2),
        });
        /* CIERRE DE MODAL */
        setShowME(!showME);
        /* RESET DE FORMULARIO */
        setForm(initialState);
      }
    } else {
      /* ALERTA SI NOMBRE ES VACIO Y MONTO NO ES MAYOR A 0 */
      Alert.alert('Error', 'Porfavor llene los campos Correctamente');
    }
  };
  return (
    <Modal visible={showME} transparent={true}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.modal}>
          <Text style={styles.textFields}>INGRESAR EGRESO</Text>

          {/*  CAMPO PARA INGRESAR GASTO */}
          <TextInput
            placeholder={'Detalle Egreso'}
            style={styles.textInput}
            onChangeText={(value) => handleChange('nombre', value)}
          />

          {/*  CAMPO PARA INGRESAR MONTO DEL EGRESO */}
          <TextInput
            placeholder={'$ 0.00'}
            keyboardType={'numeric'}
            style={styles.textInput}
            onChangeText={(value) => handleChange('monto', value)}
          />

          {/*  BOTONES DE INGRESAR Y CANCELAR */}
          <View style={styles.rowContainer}>
            <Button onPress={() => submit()} title="Ingresar" />
            <Button
              color={'red'}
              onPress={() => setShowME(!showME)}
              title="Cancelar"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EgresoModal;
