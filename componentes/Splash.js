import React, { useCallback, useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Home from './Teste';
 
 
SplashScreen.preventAutoHideAsync();
 
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
 
  useEffect(() => {
    async function prepare() {
      try {
 
        await Font.loadAsync(Entypo.font);
 
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
 
    prepare();
  }, []);
 
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
 
  if (!appIsReady) {
 
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require('./assets/logo.jpg')}
          style={styles.logo}
        />
      </View>
    );
  }
 
 
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Home />
    </View>
  );
}
 
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
  },
});
 