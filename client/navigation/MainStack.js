import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      {/* Boshqa ekranlar */}
    </Stack.Navigator>
  );
}