import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {

  //COMPONENTE BOX PARA MOSTRAR LAS CAJAS CON UN DIFERENTE COLOR Y NUMERO
  const Box = ({color, texto}) => {
    return (
      <View style={[styles.boxSize, {backgroundColor: color}]}>
        <Text style={styles.text}>{texto}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Box color={'gray'} texto={1} />
      <Box color={'black'} texto={2} />
      <Box color={'green'} texto={3} />
      <Box color={'pink'} texto={4} />
      <Box color={'blue'} texto={5} />
      <Box color={'red'} texto={6} />
      <Box color={'orange'} texto={7} />
      <Box color={'cyan'} texto={8} />
      <Box color={'brown'} texto={9} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
  },
  boxSize: {
    width: 100,
    height: 100,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  text: {fontSize: 30, fontWeight: 'bold', color: 'white'},
});
export default App;
