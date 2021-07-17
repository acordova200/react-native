import React from 'react';
import {StyleSheet, View} from 'react-native';

const ViewComponent = () => {
  return (
    <View style={styles.container}>
      <View style={[{backgroundColor: 'green'}, styles.cajaSize]} />
      <View style={[{backgroundColor: 'black'}, styles.cajaSize]} />
      <View style={[{backgroundColor: 'gray'}, styles.cajaSize]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'row'},
  cajaSize: {width: 125, height: 125},
});
export default ViewComponent;
