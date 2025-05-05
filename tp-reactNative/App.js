import { useEffect, useState } from 'react';
import { Text, View, StatusBar, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cargarApp = async () => {
      await SplashScreen.preventAutoHideAsync();

      try {
        // Simulación de carga de 5 segundos
        await new Promise(resolve => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoading(false);
        await SplashScreen.hideAsync();
      }
    };

    cargarApp();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>¡Aplicación cargada correctamente!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
