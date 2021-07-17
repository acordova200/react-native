import React, {useState} from 'react';
import {
  Text,
  TextInput,
  ScrollView,
  Button,
  StyleSheet,
  View,
} from 'react-native';
import ImageComponent from './components/Image';
import ModalScreen from './components/Modal';
import TextComponent from './components/Text';
import ViewComponent from './components/View';

const App = () => {
  const [texto, setTexto] = useState('');
  const [isVisible, setisVisible] = useState(false);

  const handleChange = (valor) => {
    setTexto(valor);
    console.log(valor);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Componente Modal</Text>
        <Button onPress={() => setisVisible(!isVisible)} title="Abrir Modal" />
        <ModalScreen isVisible={isVisible} setisVisible={setisVisible} />
        <Text style={styles.titulo}>Componente Button</Text>
        <Button
          onPress={() => console.log('Boton Presionado')}
          title="Haz Click"
        />
        <Text style={styles.titulo}>Componente Image</Text>
        <ImageComponent />
        <Text style={styles.titulo}>Componente TextInput</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(valor) => handleChange(valor)}
        />
        <Text>{texto}</Text>
        <Text style={styles.titulo}>Componente View</Text>
        <ViewComponent />
        <Text style={styles.titulo}>Componente Text</Text>
        <TextComponent />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {margin: 10},
  texto: {fontSize: 30, fontWeight: 'bold'},
  titulo: {margin: 10, fontSize: 20, fontWeight: 'bold', color: 'gray'},
  textInput: {
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default App;
