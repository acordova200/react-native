import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Result} from '../../interfaces/episode.interface';
import styles from '../../constants/styles';

const EpisodeCard: React.FC<Result> = (episode: Result) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.leCardContainer}
      onPress={() => navigation.navigate('Episode Details', episode)}>
      {/* ICONO */}
      <Ionicons name="videocam-outline" size={30} color="blue" />

      {/* NOMBRE DE EPISODIO */}
      <View style={styles.rowContainerInfo}>
        <Text style={styles.titleLE}>Nombre:</Text>
        <Text style={styles.textLE}>{episode.name}</Text>
      </View>

      {/* EPISODIO */}
      <View style={styles.rowContainerInfo}>
        <Text style={styles.titleLE}>Episodio:</Text>
        <Text style={styles.textLE}>{episode.episode}</Text>
      </View>

      {/* FECHA AL AIRE DE EPISODIO */}
      <View style={styles.rowContainerInfo}>
        <Text style={styles.titleLE}>Fecha:</Text>
        <Text style={styles.textLE}>{episode.air_date}</Text>
      </View>

      {/* NUMERO DE PERSONAJES EN EPISODIO */}
      <View style={styles.rowContainerInfo}>
        <Text style={styles.titleLE}>Personajes:</Text>
        <Text style={styles.textLE}>{episode.characters?.length}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EpisodeCard;
