import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1E2022',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
            backgroundColor: '#1E2022',
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ 
            title: 'Home',
            headerLargeTitle: true,
          }} 
        />
        <Stack.Screen 
          name="session/[id]" 
          options={{ 
            title: 'Training Session',
            headerBackTitle: 'Retour',
          }} 
        />
      </Stack>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});