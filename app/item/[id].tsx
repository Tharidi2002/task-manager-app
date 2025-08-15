import { View, Text } from "react-native"
import React from "react"
import { useLocalSearchParams } from "expo-router"

const SelectedItem = () => {
  const params = useLocalSearchParams()
  console.log(params)

  return (
    <View className="flex-1 w-full justify-center align-items-center">
      <Text className="text-4xl">SelectedItem</Text>
      <Text className="text-4xl">{params?.id}</Text>
      <Text className="text-4xl">{params?.name}</Text>
      <Text className="text-4xl">{params?.age}</Text>
      <Text className="text-4xl">{params?.address}</Text>
    </View>
  )
}

export default SelectedItem
