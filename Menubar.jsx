import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function Menubar({ navigation }) {
  return (
    <View style={tw`flex p-4 bg-purple-300 h-fit flex-row justify-between`}>
      <Text>Home</Text>
      <Text>Menu</Text>
      <Text
        style={tw`text-blue-500`}
        onPress={() => navigation.navigate('Profile')} // This navigates to the Profile screen
      >
        Profile
      </Text>
    </View>
  );
}
