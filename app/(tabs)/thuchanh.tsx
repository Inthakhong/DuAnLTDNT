import { Text, View } from 'react-native';

export default function MyApp() {
  const isLoggedIn = true;

  return (
    <View>
      {isLoggedIn && <Text>Welcome back!</Text>}
    </View>
  );
}