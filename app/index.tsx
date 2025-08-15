import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'


// rfne
const Index = () => {
  return (
    <View className='flex-1 w-full justify-center align-items-center'>
        <Pressable className='bg-blue-500 px-6 py-3' onPress={() => router.push('/')}>
            <Text className='text-4xl'>Go</Text>
        </Pressable>
    </View>
  )
}

export default Index