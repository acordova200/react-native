import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Result} from '../../interfaces/location.interface';
import styles from '../../constants/styles';

const LocationCard: React.FC<Result> = (location: Result) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.leCardContainer}
      onPress={() => navigation.navigate('Location Details', location)}>
      {/* ICONO DE UBICACION */}
      <Ionicons name="location-outline" size={30} color="blue" />

      {/* TIPO DE UBICACION */}
      <View style={styles.rowContainerInfo}>
        <Text style={styles.titleLE}>Tipo:</Text>
        <Text style={styles.textLE}>{location.type}</Text>
      </View>

      {/* NOMBRE DE UBICACION */}
      <View style={styles.rowContainerInfo}>
        <Text style={styles.titleLE}>Nombre:</Text>
        <Text style={styles.textLE}>{location.name}</Text>
      </View>

      {/* DIMENSION DE UBICACION */}
      <View style={styles.rowContainerInfo}>
        <Text style={styles.titleLE}>Dimensión:</Text>
        <Text style={styles.textLE}>{location.dimension}</Text>
      </View>

      {/* NUMERO DE HABITANTES EN UBICACION */}
      <View style={styles.rowContainerInfo}>
        <Text style={styles.titleLE}>Habitantes:</Text>
        <Text style={styles.textLE}>{location.residents?.length}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LocationCard;
