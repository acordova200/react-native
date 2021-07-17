/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Result, Status} from '../../interfaces/character.interface';
import styles from '../../constants/styles';

const CharacterCard: React.FC<Result> = (character: Result) => {
  const navigation = useNavigation();
  /* COLOR SEGUN EL ESTADO - VIVO - MUERTO O DESCONOCIDO */
  const isAlive = (status: Status) => {
    if (status === 'Alive') {
      return 'green';
    } else if (status === 'Dead') {
      return 'red';
    }
    return 'gray';
  };
  /*  ENVIAMOS URL DE ORIGEN O UBICACION */
  const goToPage = async (url: any) => {
    /*  PETICION GET DE URL DE UBICACION A API DE RICK AND MORTY */
    const response = await fetch(url);
    /*  CONVERTIMOS LOS DATOS A JSON */
    const location = await response.json();
    /*  NAVEGAMOS A DETALLE DE UBICACION Y ENVIAMOS COMO PARAMETROS LOS DATOS DE LA UBICACION */
    navigation.navigate('Location Character Details', location);
  };
  /*  COMPONENTE DE PERSONAJE */
  const Character = () => (
    <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
      {/* IMAGEN DE PERSONAJE */}
      <Image
        style={{width: '80%', height: 150, borderRadius: 20}}
        source={{uri: character.image}}
      />

      {/* NOMBRE DE PERSONAJE */}
      <Text style={styles.title} numberOfLines={1}>
        {character.name}
      </Text>

      {/* ESTADO DE PERSONAJE Y COLOR DE ESTADO */}
      <View style={{flexDirection: 'row'}}>
        <View
          style={[styles.isAlive, {backgroundColor: isAlive(character.status)}]}
        />
        <Text style={styles.text}>{' ' + character.status}</Text>
      </View>

      {/* ESPECIE DE PERSONAJE */}
      <Text style={styles.text}>{character.species}</Text>
    </View>
  );

  /*  COMPONENTE DE ORIGEN Y UBICACION */
  const Location = () => (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      {/* BOTON DE ORIGEN */}
      <TouchableOpacity
        disabled={character.origin?.name === 'unknown'}
        style={[styles.btnContainer, {backgroundColor: 'lightgreen'}]}
        onPress={() => goToPage(character.origin?.url)}>
        <Text style={styles.title}>Origen</Text>
        <Text>{character.origin?.name}</Text>
      </TouchableOpacity>

      {/* BOTON DE UBICACION */}
      <TouchableOpacity
        disabled={character.location?.name === 'unknown'}
        style={[styles.btnContainer, {backgroundColor: 'lightblue'}]}
        onPress={() => goToPage(character.location?.url)}>
        <Text style={styles.title}>Ubicación</Text>
        <Text>{character.location?.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.characterCardContainer}>
      <View style={styles.rowContainer}>
        <Character />
        <Location />
      </View>
    </View>
  );
};

export default CharacterCard;
