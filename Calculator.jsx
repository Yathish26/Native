import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import tw from 'twrnc';

export default function Home() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const handlePress = (value) => {
        if (value === 'C') {
            setInput('');
            setResult(null);
        } else if (value === '⌫') {
            setInput((prev) => prev.slice(0, -1)); // Remove the last character
        } else if (value === '=') {
            try {
                const calculated = eval(input);
                setResult(calculated);
            } catch (error) {
                setResult('Error');
            }
        } else {
            setInput((prev) => prev + value);
        }
    };

    const rows = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['C', '0', '=', '+'],
        ['⌫'], // Backspace button row
    ];

    return (
        <View style={tw`flex-1 bg-[#1E293B] justify-center items-center`}>
            {/* Calculator Display */}
            <View style={tw`w-11/12 bg-gray-800 rounded-xl p-4 mb-6`}>
                <TextInput
                    style={tw`text-white text-3xl font-light mb-2`}
                    value={input}
                    editable={false}
                    placeholder="0"
                    placeholderTextColor="#6B7280"
                />
                <Text style={tw`text-green-400 text-4xl font-bold text-right`}>
                    {result !== null ? result : ''}
                </Text>
            </View>

            {/* Calculator Buttons */}
            <View style={tw`w-11/12`}>
                {rows.map((row, rowIndex) => (
                    <View key={rowIndex} style={tw`flex-row justify-between mb-3`}>
                        {row.map((btn, index) => (
                            <TouchableOpacity
                                key={index}
                                style={tw.style(
                                    'flex-1 m-1 p-4 rounded-xl justify-center items-center',
                                    btn === 'C' ? 'bg-orange-500' : 
                                    btn === '⌫' ? 'bg-red-500' : 'bg-gray-700'
                                )}
                                onPress={() => handlePress(btn)}
                            >
                                <Text style={tw`text-white text-2xl font-medium`}>
                                    {btn}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );
}
