/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

interface Props {
  title: string;
}
/* COMPONENTE DE TITULO DE TAREAS */
const TitleTask = ({title}: Props) => {
  return (
    <View style={{alignItems: 'center', marginVertical: 30}}>
      <Text style={{fontWeight: 'bold', fontSize: 15}}>{title}</Text>
    </View>
  );
};

export default TitleTask;
