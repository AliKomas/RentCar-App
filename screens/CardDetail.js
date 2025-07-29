import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import AppBackground from '../components/AppBackground';

export default function CarDetail({ route, navigation }) {
  const { car } = route.params;

  return (
    <AppBackground>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Image source={car.image} style={styles.carImage} />
        <Text style={styles.title}>{car.brand} {car.model}</Text>
        <View style={styles.infoBox}>
          <Text style={styles.subtitle}>Günlük Fiyat: {car.pricePerDay} TL</Text>
          <Text style={styles.infoText}>Yakıt Tipi: {car.fuel}</Text>
          <Text style={styles.infoText}>Kasa Tipi: {car.type}</Text>
          <Text style={styles.infoText}>Vites: {car.transmission}</Text>
        </View>
        <Text style={styles.description}>{car.description}</Text>
        <View style={styles.rentalBox}>
          <Text style={styles.rentalTitle}>Kiralama Koşulları:</Text>
          {car.rentalConditions && car.rentalConditions.map((cond, idx) => (
            <Text key={idx} style={styles.rentalItem}>• {cond}</Text>
          ))}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Payment', { car })}
        >
          <Text style={styles.buttonText}>Kiralama Yap</Text>
        </TouchableOpacity>
      </ScrollView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', color: '#fff', textShadowColor: 'rgba(0,0,0,0.25)', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 6 },
  carImage: {
    width: 260,
    height: 260,
    borderRadius: 20,
    marginBottom: 15,
    resizeMode: 'contain',
    backgroundColor: '#f4f4f4',
    alignSelf: 'center',
    maxWidth: '90%',
    maxHeight: '90%',
  },
  infoBox: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: '100%',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#222',
  },
  infoText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 3,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.15)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  rentalBox: {
    backgroundColor: '#eaf6ff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    width: '100%',
  },
  rentalTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
    color: '#1565c0',
  },
  rentalItem: {
    fontSize: 15,
    color: '#333',
    marginLeft: 8,
    marginBottom: 2,
  },
  button: {
    backgroundColor: '#ff9800',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
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
});
