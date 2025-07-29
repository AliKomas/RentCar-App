import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView, Platform } from 'react-native';
import AppBackground from '../components/AppBackground';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function PaymentScreen({ route, navigation }) {
  const { car } = route.params;

  const [days, setDays] = useState('1');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [location, setLocation] = useState('');

  // Tarih seçimi için state
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const totalPrice = parseInt(days) * car.pricePerDay;

  const handlePayment = () => {
    if (!days || isNaN(parseInt(days)) || parseInt(days) <= 0) {
      Alert.alert('Hata', 'Lütfen geçerli bir kiralama süresi giriniz.');
      return;
    }
    if (!cardNumber || !expiry || !cvv || !cardName || !location) {
      Alert.alert("Hata", "Lütfen tüm alanları doldurunuz.");
      return;
    }
    if (!startDate || !endDate) {
      Alert.alert('Hata', 'Lütfen kiralama ve teslim tarihlerini seçiniz.');
      return;
    }
    if (endDate < startDate) {
      Alert.alert('Hata', 'Teslim tarihi, kiralama tarihinden önce olamaz.');
      return;
    }
    Alert.alert("Ödeme Başarılı", "Araç kiralama tamamlandı.", [
      {
        text: "Tamam",
        onPress: () => navigation.navigate('SuccessScreen', { car, location, startDate: startDate.toISOString(), endDate: endDate.toISOString() }),
      },
    ]);
  };

  return (
    <AppBackground>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.summaryBox}>
          <Text style={styles.carText}>{car.brand} {car.model}</Text>
          <Text style={styles.label}>Kiralama Süresi (gün):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={days}
            onChangeText={setDays}
            placeholder="Gün"
            placeholderTextColor="#888"
          />
          <Text style={styles.label}>Toplam Tutar: <Text style={styles.price}>₺{isNaN(totalPrice) ? 0 : totalPrice}</Text></Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Konum (Şehir/Semt veya Adres)"
          value={location}
          onChangeText={setLocation}
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.dateButton} onPress={() => setShowStartPicker(true)}>
          <Text style={styles.dateButtonText}>Kiralama Tarihi: {startDate.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showStartPicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(event, selectedDate) => {
              setShowStartPicker(false);
              if (selectedDate) setStartDate(selectedDate);
            }}
          />
        )}
        <TouchableOpacity style={styles.dateButton} onPress={() => setShowEndPicker(true)}>
          <Text style={styles.dateButtonText}>Teslim Tarihi: {endDate.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showEndPicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(event, selectedDate) => {
              setShowEndPicker(false);
              if (selectedDate) setEndDate(selectedDate);
            }}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Kart Numarası"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={setCardNumber}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Son Kullanma Tarihi (AA/YY)"
          value={expiry}
          onChangeText={setExpiry}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          keyboardType="numeric"
          secureTextEntry
          value={cvv}
          onChangeText={setCvv}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Kart Üzerindeki İsim"
          value={cardName}
          onChangeText={setCardName}
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Ödemeyi Tamamla</Text>
        </TouchableOpacity>
      </ScrollView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    textAlign: 'center',
  },
  summaryBox: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  carText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    color: '#263238',
  },
  label: {
    fontSize: 15,
    color: '#444',
    marginBottom: 2,
  },
  price: {
    color: '#ff9800',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    borderWidth: 0,
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: 'rgba(255,255,255,0.95)',
    fontSize: 16,
    color: '#222',
    width: 300,
  },
  dateButton: {
    backgroundColor: '#eaf6ff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    width: 300,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#b3e0ff',
  },
  dateButtonText: {
    color: '#1565c0',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ff9800',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
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
});
