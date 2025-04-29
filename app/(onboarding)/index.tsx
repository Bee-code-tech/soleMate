'use client';
import { FlatList, View, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { onboardingData } from '@/constants/onBoardingData';
import OnboardingItem from '@/components/OnboardingItem';
import PaginationDot from '@/components/PaginationDots';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const router = useRouter();

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (currentIndex === onboardingData.length - 1) return; 

    const timer = setInterval(() => {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    }, 3000); // every 3 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleGetStarted = () => {
    router.replace('/(tabs)'); 
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={({ item }) => <OnboardingItem item={item} />}
      />

      <View style={styles.bottomContainer}>
        {/* Pagination dots */}
        {currentIndex !== onboardingData.length - 1 ? (
          <View style={styles.pagination}>
            {onboardingData.map((_, index) => (
              <PaginationDot key={index} index={index} currentIndex={currentIndex} />
            ))}
          </View>
        ) : (
          /* Get Started Button */
          <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  getStartedButton: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  getStartedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
