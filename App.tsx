import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CharacterScreen from './src/screens/CharacterScreen';
import LocationScreen from './src/screens/LocationScreen';
import LocationDetail from './src/components/details/LocationDetail';
import EpisodeScreen from './src/screens/EpisodeScreen';
import EpisodeDetail from './src/components/details/EpisodeDetail';

/* STACK DE PERSONAJES */
const CharacterStack = createStackNavigator();

/* PANTALLAS DE PERSONAJES */
const CharacterStackScreen = () => {
  return (
    <CharacterStack.Navigator>
      <CharacterStack.Screen
        name="Character"
        component={CharacterScreen}
        options={{headerShown: false}}
      />
      <CharacterStack.Screen
        name="Location Character Details"
        component={LocationDetail}
        options={{headerShown: true, title: 'Personajes de Ubicación'}}
      />
    </CharacterStack.Navigator>
  );
};

/* STACK DE UBICACIONES */
const LocationStack = createStackNavigator();

/* PANTALLAS DE UBICACIONES */
const LocationStackScreen = () => {
  return (
    <LocationStack.Navigator>
      <LocationStack.Screen
        name="Location"
        component={LocationScreen}
        options={{headerShown: false}}
      />
      <LocationStack.Screen
        name="Location Details"
        component={LocationDetail}
        options={{headerShown: true, title: 'Habitantes de Ubicación'}}
      />
    </LocationStack.Navigator>
  );
};

/* STACK DE EPISODIOS */
const EpisodeStack = createStackNavigator();

/* PANTALLAS DE EPISODIOS */
const EpisodeStackScreen = () => {
  return (
    <EpisodeStack.Navigator>
      <EpisodeStack.Screen
        name="Episode"
        component={EpisodeScreen}
        options={{headerShown: false}}
      />
      <EpisodeStack.Screen
        name="Episode Details"
        component={EpisodeDetail}
        options={{headerShown: true, title: 'Personajes de Episodio'}}
      />
    </EpisodeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Character"
          component={CharacterStackScreen}
          options={{
            tabBarLabel: 'Personajes',
            tabBarIcon: () => (
              <Ionicons name="person-circle-outline" size={30} color="gray" />
            ),
          }}
        />
        <Tab.Screen
          name="Location"
          component={LocationStackScreen}
          options={{
            tabBarLabel: 'Ubicación',
            tabBarIcon: () => (
              <Ionicons name="location-outline" size={30} color="gray" />
            ),
          }}
        />
        <Tab.Screen
          name="Episode"
          component={EpisodeStackScreen}
          options={{
            tabBarLabel: 'Episodios',
            tabBarIcon: () => (
              <Ionicons name="videocam-outline" size={30} color="gray" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
