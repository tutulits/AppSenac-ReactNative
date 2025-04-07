import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Login from './Login';
import CriarLogin from './CriarLogin';
import Cursos from './Cursos';
import Home from './Home';
import Dicas from './Dicas';
import Perfil from './Perfil';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Navegação por abas (após login)
function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#005594' }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Dicas"
        component={Dicas}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="lightbulb-on" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

// Controle de navegação geral
export default function Rotas() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="CriarLogin" component={CriarLogin} options={{ headerShown: false }} />
      <Stack.Screen name="Cursos" component={Cursos} options={{ headerShown: false }} />
      <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
