import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import Home from './src/Screens/Home';
import ItemListCategory from './src/Screens/ItemListCategory';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import Navigator from './src/Navigation/Navigator';

export default function App() {
  
  const [categorySelected, setCategorySelected] = useState("");

  const [fontstLoaded] = useFonts({
    //'Agdasima': require('./src/Assets/Agdasima/Agdasima-Bold.ttf'),
    'Agdasima': require('./src/Assets/Agdasima/Agdasima-Regular.ttf')
  });

  //si no hay fuents no se muestra
  if (!fontstLoaded) {
    return null;
  }

  return (
    <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
