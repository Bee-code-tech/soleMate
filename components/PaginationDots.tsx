'use client';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface Props {
  index: number;
  currentIndex: number;
}

export default function PaginationDot({ index, currentIndex }: Props) {
  const animatedStyle = useAnimatedStyle(() => ({
    width: withTiming(currentIndex === index ? 24 : 8, { duration: 300 }),
    backgroundColor: withTiming(currentIndex === index ? '#2563eb' : '#9ca3af', { duration: 300 }),
  }));

  return (
    <Animated.View
      style={[
        {
          height: 8,
          borderRadius: 4,
          marginHorizontal: 4,
        },
        animatedStyle,
      ]}
    />
  );
}
