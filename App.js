import React from 'react';
import {View, Text, Button, Image} from 'react-native';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

/* PANTALLA DE INICIO */
const HomeScreen = () => {
  const navigation = useNavigation();

  /* DATOS DE JSON QUE SE ENVIARA A OTRA PANTALLA */
  const data = {
    nombre: 'Andres Cordova',
    imagen:
      'https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144857620.jpg',
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>

      {/* BOTON PARA IR A PANTALLA DOS Y A LA VEZ ENVIAR PARAMETROS CON NAVIGATION */}
      <Button
        title="Ir A Pantalla 2"
        onPress={() => navigation.navigate('Pantalla Dos', data)}
      />
    </View>
  );
};

const PantallaUnoScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Pantalla Uno Screen</Text>

      {/* BOTON PARA IR A PANTALLA DE INICIO */}
      <Button title="Ir a Inicio" onPress={() => navigation.popToTop()} />
    </View>
  );
};

const PantallaDosScreen = ({route: {params}}) => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* NOMBRE DE PARAMETRO ENVIADO */}
      <Text>{params.nombre}</Text>

      {/* IMAGEN DE PARAMETRO ENVIADO */}
      <Image
        source={{uri: `${params.imagen}`}}
        style={{width: 100, height: 100}}
      />

      {/* BOTON PARA NAVEGAR A PANTALLA 1 */}
      <Button
        title="Ir A Pantalla 1"
        onPress={() => navigation.navigate('Pantalla Uno')}
      />
    </View>
  );
};

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      {/* STACK DE NAVEGACION */}
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'vertical',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        {/* PANTALLA DE INICIO */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Inicio',
            headerShown: true,
          }}
        />

        {/* PANTALLA 1 */}
        <Stack.Screen
          name="Pantalla Uno"
          component={PantallaUnoScreen}
          options={{
            title: 'Pantalla Uno',
            headerShown: true,
          }}
        />

        {/* PANTALLA 2 */}
        <Stack.Screen
          name="Pantalla Dos"
          component={PantallaDosScreen}
          options={{
            title: 'Pantalla Dos',
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
