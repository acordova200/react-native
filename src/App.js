import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import data from './Data';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* BANNER */}
        <Image style={styles.banner} source={data.banner.img} />

        {/* MOOD WEEKEND */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.moodWeekend.title}</Text>
          <Image style={styles.icon} source={data.moodWeekend.rightIcon} />
        </View>
        <ScrollView horizontal>
          {data.moodWeekend.images.map((images, index) => (
            <Image
              key={index}
              style={styles.moodWeekendImg}
              source={images.img}
            />
          ))}
        </ScrollView>

        {/* TOP ALBUMS */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.topAlbums.title}</Text>
        </View>
        {data.topAlbums.images.map((images, index) => (
          <Image key={index} style={styles.topAlbumsImg} source={images.img} />
        ))}

        {/* BROWSE ALL */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.browseAll.title}</Text>
        </View>
        <View style={styles.browseAllContainer}>
          {data.browseAll.images.map((images, index) => (
            <Image key={index} style={styles.browseImg} source={images.img} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  titleContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2caeca',
  },
  icon: {
    opacity: 0.5,
    marginHorizontal: 5,
    borderRadius: 20,
    width: 30,
    height: 30,
  },
  moodWeekendImg: {
    marginHorizontal: 5,
    borderRadius: 20,
    width: 150,
    height: 150,
  },
  topAlbumsImg: {
    borderRadius: 50,
    margin: 5,
    width: '98%',
    height: 300,
  },
  browseAllContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  browseImg: {
    borderRadius: 20,
    margin: 5,
  },
});
export default App;
