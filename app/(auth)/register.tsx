import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Register = () => {
    const router = useRouter()
  return (
    <View className="flex-1 bg-[#f8f4f0] justify-center items-center px-6">
      {/* Title */}
      <Text className="text-3xl font-bold text-gray-800 mb-2">
        Register Screen
      </Text>
      <Text className="text-gray-500 mb-12 text-center">
        Create your account to get started
      </Text>

      {/* Go Back Button */}
      <Pressable
        onPress={() => router.back()}
        className="w-full max-w-xs bg-purple-500 rounded-xl shadow-md"
        android_ripple={{ color: '#ffffff30', borderless: false }}
        style={({ pressed }) => [{ opacity: pressed ? 0.85 : 1 }]}
      >
        <View className="px-6 py-4 flex-row justify-center items-center">
          <Text className="text-white text-lg font-semibold">Go to Login</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Register