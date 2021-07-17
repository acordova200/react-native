import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import EpisodeCard from '../cards/EpisodeCard';
import CharacterImage from '../CharacterImage';
import {Result} from '../../interfaces/episode.interface';
import styles from '../../constants/styles';

/* INTERFAZ DE COMPONENTE */
interface Props {
  route: {params: Result};
}
const EpisodeDetail: React.FC<Props> = ({route: {params: episode}}: Props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* TARJETA DE EPISODIO */}
        <EpisodeCard {...episode} />
        <View style={styles.characterImgContainer}>
          {/* IMAGENES DE PERSONAJES EN EPISODIO */}
          <CharacterImage residents={episode.characters} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EpisodeDetail;
