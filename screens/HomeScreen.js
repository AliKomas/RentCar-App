import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions, Platform } from 'react-native';
import AppBackground from '../components/AppBackground';
import { cars } from '../data/car';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const PAGE_SIZE = 5;
  const [displayedCars, setDisplayedCars] = useState(cars.slice(0, PAGE_SIZE));
  const [page, setPage] = useState(1);

  const loadMoreCars = () => {
    const nextPage = page + 1;
    const newCars = cars.slice(0, nextPage * PAGE_SIZE);
    if (newCars.length > displayedCars.length) {
      setDisplayedCars(newCars);
      setPage(nextPage);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.carImage} />
      <View style={styles.infoBox}>
        <Text style={styles.title}>{item.brand} {item.model}</Text>
        <Text style={styles.price}>Günlük: {item.pricePerDay} TL</Text>
        <Text style={styles.desc}>{item.description}</Text>
        <TouchableOpacity
          style={styles.detailButton}
          onPress={() => navigation.navigate('CarDetail', { car: item })}
        >
          <Text style={styles.detailButtonText}>Detay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <AppBackground>
      <FlatList
        data={displayedCars}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onEndReached={loadMoreCars}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20, backgroundColor: 'transparent' }}
      />
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 18,
    textAlign: 'center',
    letterSpacing: 1,
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 18,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
    alignItems: 'center',
  },
  carImage: {
    width: width * 0.8,
    height: width * 0.8,
    resizeMode: 'contain',
    backgroundColor: '#f4f4f4',
    borderRadius: 16,
    marginTop: 12,
    marginBottom: 15,
    alignSelf: 'center',
    maxWidth: '95%',
    maxHeight: '95%',
  },
  infoBox: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#263238',
    marginBottom: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ff9800',
    marginBottom: 6,
  },
  desc: {
    fontSize: 15,
    color: '#555',
    marginBottom: 12,
  },
  detailButton: {
    backgroundColor: '#ff9800',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 4,
    shadowColor: '#ff9800',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  detailButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
    textShadowColor: 'rgba(0,0,0,0.15)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});
