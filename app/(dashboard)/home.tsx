import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-[#f8f4f0] justify-center items-center px-6">
      {/* Title */}
      <Text className="text-3xl font-bold text-gray-800 mb-2">
        Welcome Home
      </Text>
      <Text className="text-gray-500 mb-3 text-center">
        You’re now on the main screen of the app
      </Text>
      {/* Additional Details */}
      <Text className="text-gray-400 mb-12 text-center leading-6">
        From here, you can explore your profile, register for a new account, or 
        return to login. This is your starting point to navigate through all 
        the app’s features with ease.
      </Text>
    </View>
  )
}

export default HomeScreen