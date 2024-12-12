import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

export default function Profile() {
    return (
        <View style={tw`flex-1 items-center bg-[#111827] justify-center`}>
            <Text style={tw`text-3xl font-thin text-white`}>
                Profile
            </Text>
        </View>
    )
}