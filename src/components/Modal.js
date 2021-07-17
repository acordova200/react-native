import React from 'react';
import {Button, Modal, Text, View, StyleSheet} from 'react-native';

const ModalScreen = ({isVisible, setisVisible}) => {
  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalStyle}>
          <Text style={styles.textModal}>Modal</Text>
          <Button
            onPress={() => setisVisible(!isVisible)}
            title="Cerrar Modal"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  modalStyle: {
    width: 250,
    height: 200,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  textModal: {color: 'white', fontWeight: 'bold', fontSize: 25},
});

export default ModalScreen;
