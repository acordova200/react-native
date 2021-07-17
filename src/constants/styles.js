import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#34006a'},
  dashboardContainer: {
    padding: 20,
    flex: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: 'white',
  },
  resumenContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
  },
  rowContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textPE: {
    color: 'white',
    fontSize: 20,
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  disponibleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    height: 75,
    borderRadius: 50,
  },
  modal: {
    width: 400,
    height: 400,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
  },
  textFields: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInput: {
    minWidth: 200,
    borderWidth: 1,
    borderRadius: 20,
    margin: 20,
  },
  detalleContainer: {
    marginVertical: 5,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
