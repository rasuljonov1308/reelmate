import React from 'react';
import { View, Text } from 'react-native';
import ReelList from '../../components/reel/ReelList';

export default function HomeScreen() {
  return (
    <View>
      <Text>ReelMate</Text>
      <ReelList />
    </View>
  );
}