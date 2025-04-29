import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const DetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Details for Coffee ID: {id}</Text>
    </View>
  );
};

export default DetailsScreen;