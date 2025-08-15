import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'


// rfne
const Index = () => {
  return (
    <View className="flex-1 bg-[#f8f4f0] justify-center items-center px-6">
      {/* Title */}
      <Text className="text-3xl font-bold text-gray-800 mb-6">Welcome</Text>
      <Text className="text-gray-500 mb-12 text-center">
        Press the button below to go to the login screen
      </Text>

      {/* Button with press feedback */}
      <Pressable
        onPress={() => router.push('/login')}
        className="w-full max-w-xs rounded-xl bg-blue-500 shadow-md"
        android_ripple={{ color: '#ffffff30', borderless: false }}
        style={({ pressed }) => [
          { opacity: pressed ? 0.85 : 1 },
        ]}
      >
        <View className="px-6 py-4 flex-row justify-center items-center">
          <Text className="text-white text-lg font-semibold">Go to Login</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Index