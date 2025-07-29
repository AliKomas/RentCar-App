import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function SuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/favicon.png')} 
        style={styles.image}
      />
      <Text style={styles.title}> Ödeme Başarılı</Text>
      <Text style={styles.subtitle}>Teşekkür ederiz.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HomeScreen')} 
      >
        <Text style={styles.buttonText}>Ana Sayfaya Dön</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
