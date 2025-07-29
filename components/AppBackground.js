import React from 'react';
import { StyleSheet, Platform, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function AppBackground({ children }) {
  return (
    <LinearGradient
      colors={['#43cea2', '#185a9d']}
      style={styles.gradientBg}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBg: {
    flex: 1,
    paddingHorizontal: 10,
  },
  safeArea: {
    flex: 1,
  },
}); 