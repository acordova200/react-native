import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const ImageComponent = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      {/* IMAGEN DESDE UNA API */}
      <TouchableHighlight
        onPress={() => console.log('Boton TouchableHighlight')}>
        <Image
          style={styles.cajaSize}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
      </TouchableHighlight>

      {/* IMAGEN LOCAL */}
      <TouchableOpacity onPress={() => console.log('Boton TouchableOpacity')}>
        <Image
          style={styles.cajaSize}
          source={require('./imgs/react-native.jpg')}
        />
      </TouchableOpacity>

      {/* IMAGEN EN 64 BITS */}
      <TouchableWithoutFeedback
        onPress={() => console.log('Boton TouchableWithoutFeedback')}>
        <Image
          style={styles.cajaSize}
          source={{
            uri:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  cajaSize: {width: 125, height: 125},
});
export default ImageComponent;
