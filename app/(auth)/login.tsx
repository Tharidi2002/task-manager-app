import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Login = () => {
    const router = useRouter()
  return (
    <View className="flex-1 bg-[#f8f4f0] justify-center items-center px-6">
      {/* Title */}
      <Text className="text-3xl font-bold text-gray-800 mb-2">
        Login Screen
      </Text>
      <Text className="text-gray-500 mb-12 text-center">
        Choose where you want to go next
      </Text>

      {/* Button: Go to Home */}
      <Pressable
        onPress={() => router.push('/home')}
        className="w-full max-w-xs bg-blue-500 rounded-xl shadow-md mb-4"
        android_ripple={{ color: '#ffffff30', borderless: false }}
        style={({ pressed }) => [{ opacity: pressed ? 0.85 : 1 }]}
      >
        <View className="px-6 py-4 flex-row justify-center items-center">
          <Text className="text-white text-lg font-semibold">Go to Home</Text>
        </View>
      </Pressable>

      {/* Button: Go to Register */}
      <Pressable
        onPress={() => router.push('/register')}
        className="w-full max-w-xs bg-green-500 rounded-xl shadow-md"
        android_ripple={{ color: '#ffffff30', borderless: false }}
        style={({ pressed }) => [{ opacity: pressed ? 0.85 : 1 }]}
      >
        <View className="px-6 py-4 flex-row justify-center items-center">
          <Text className="text-white text-lg font-semibold">Go to Register</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Login