import React, { useEffect, useState } from 'react';
import {View,Text,StyleSheet,TouchableOpacity, TextInput,Alert} from 'react-native';
import AppBackground from '../components/AppBackground';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => { }, []);

  return (
    <AppBackground>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder='Email'
          keyboardType='email-address'
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder='Şifre'
          secureTextEntry={true}
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.button} 
          onPress={() => {
            if (!email || !password) {
              Alert.alert("Hata", "Lütfen e-posta ve şifre girin");
              return;
            }
            navigation.navigate('HomeScreen'); 
          }}>
          <Text style={styles.buttonText}>GİRİŞ YAP</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Hesabın yok mu?
          <Text style={styles.link} onPress={() => navigation.navigate('RegisterScreen')}> Kayıt Ol</Text>
        </Text>
      </View>
    </AppBackground>
  );
}

const styles =StyleSheet.create({
  innerContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
  },
  input: {
    width: 300,
    height: 48,
    marginVertical: 10,
    borderWidth: 0,
    borderRadius: 10,
    padding: 12,
    backgroundColor: 'rgba(255,255,255,0.95)',
    fontSize: 16,
    color: '#222',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ff9800',
    padding: 14,
    borderRadius: 10,
    marginTop: 18,
    width: 300,
    shadowColor: '#ff9800',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
    textShadowColor: 'rgba(0,0,0,0.15)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  text:{
    textAlign: 'center', 
    marginTop: 20,
    color: '#fff',
    fontSize: 16,
  },
  link: {
    color: '#ff9800',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  }
});









