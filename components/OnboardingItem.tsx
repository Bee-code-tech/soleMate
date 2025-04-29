'use client';
import { View, Text, Image, Dimensions } from 'react-native';
import { onboardingData } from '@/constants/onBoardingData';

const { width } = Dimensions.get('window');

interface Props {
  item: typeof onboardingData[0];
}

export default function OnboardingItem({ item }: Props) {
  return (
    <View
      style={{
        width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: item.backgroundColor,
        padding: 20,
      }}
    >
      <Image
        source={item.image}
        style={{ width: 300, height: 300, resizeMode: 'contain', marginBottom: 30 }}
      />
      <Text style={{ fontSize: 28, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
        {item.title}
      </Text>
      <Text style={{ fontSize: 16, color: '#d1d5db', textAlign: 'center', marginTop: 12 }}>
        {item.description}
      </Text>
    </View>
  );
}
