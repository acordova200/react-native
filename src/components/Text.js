import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TextComponent = () => {
  return (
    <>
      <Text style={styles.texto}>Hola Mundo</Text>
      <Text style={{fontSize: 20}}>Texto Prueba 2</Text>
    </>
  );
};

const styles = StyleSheet.create({
  texto: {fontSize: 30, fontWeight: 'bold'},
});
export default TextComponent;
