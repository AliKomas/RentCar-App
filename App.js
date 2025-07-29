import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardDetail from './screens/CardDetail';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PaymentScreen from './screens/PaymentScreen';
import SuccessScreen from './screens/SuccessScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#fff',
            textShadowColor: 'rgba(0,0,0,0.25)',
            textShadowOffset: { width: 0, height: 2 },
            textShadowRadius: 6,
            letterSpacing: 1,
          },
          headerBackground: () => (
            <LinearGradient
              colors={['#43cea2', '#185a9d']}
              style={StyleSheet.absoluteFill}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
          ),
        }}
      >
        <Stack.Screen name='Login' component={LoginScreen} options={{ title: 'Giriş Yap' }} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{ title: 'Kayıt Ol' }} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ title: 'Araçlar' }} />
        <Stack.Screen name="CarDetail" component={CardDetail} options={{ title: 'Araç Detayı' }} />
        <Stack.Screen name="Payment" component={PaymentScreen} options={{ title: 'Ödeme' }} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{ title: 'Başarılı' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
