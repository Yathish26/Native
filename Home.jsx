import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function Home() {
    return (
        <View style={tw`flex-1 items-center bg-[#111827] justify-center`}>
            <Text style={tw`text-3xl font-thin text-white`}>
                Hire Arrive
            </Text>
        </View>
    );
}
