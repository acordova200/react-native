import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Image} from 'react-native-elements';
import styles from '../constants/styles';

const CharacterImage = ({residents}: any) => {
  return (
    <>
      {residents &&
        residents.map((resident: string, index: number) => (
          <View key={index}>
            <Image
              style={styles.characterImg}
              source={{
                uri: `https://rickandmortyapi.com/api/character/avatar/${resident.substring(
                  42,
                )}.jpeg`,
              }}
              PlaceholderContent={
                <ActivityIndicator size="large" color="#0000ff" />
              }
            />
          </View>
        ))}
    </>
  );
};

export default CharacterImage;
