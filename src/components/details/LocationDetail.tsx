import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import CharacterImage from '../CharacterImage';
import LocationCard from '../cards/LocationCard';
import {Result} from '../../interfaces/location.interface';
import styles from '../../constants/styles';

/* INTERFAZ DE COMPONENTE */
interface Props {
  route: {params: Result};
}
const LocationDetail: React.FC<Props> = ({
  route: {params: location},
}: Props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/*  TARJETA DE UBICACION */}
        <LocationCard {...location} />
        <View style={styles.characterImgContainer}>
          {/*  IMAGENES DE PERSONAJES DE UBICACION */}
          <CharacterImage residents={location.residents} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LocationDetail;
