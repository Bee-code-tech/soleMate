'use client';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { onboardingData } from '@/constants/onBoardingData';

const { width, height } = Dimensions.get('window');

interface Props {
  item: typeof onboardingData[0];
}

export default function OnboardingItem({ item }: Props) {
  return (
    <View style={[styles.container, { backgroundColor: item.backgroundColor }]}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.overlay}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  overlay: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#d1d5db',
    textAlign: 'center',
  },
});
