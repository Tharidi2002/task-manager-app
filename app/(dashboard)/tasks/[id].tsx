import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'

const TaskFormScreen = () => {
    const { id } = useLocalSearchParams<{id: string}>()
    //params.id = {id}
    const isNew = !id || id === 'new'   //null or id is new - save

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const handleSubmit = async () => {}

  return (
    <View className="flex-1 w-full bg-white px-6 py-8">
    {/* Header */}
    <Text className="text-3xl font-bold text-center text-gray-800 mb-8">
      {isNew ? "Add Task" : "Edit Task"}
    </Text>

    {/* Title Input */}
    <TextInput
      placeholder="Enter title"
      value={title}
      onChangeText={setTitle}
      className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
      placeholderTextColor="#9CA3AF"
    />

    {/* Description Input */}
    <TextInput
      placeholder="Enter description"
      value={description}
      onChangeText={setDescription}
      className="border border-gray-300 rounded-xl px-4 py-3 mb-6 text-base"
      placeholderTextColor="#9CA3AF"
      multiline
    />

    {/* Submit Button */}
    <TouchableOpacity className="bg-blue-500 py-4 rounded-2xl shadow-md active:opacity-80">
      <Text className="text-white text-center text-lg font-semibold">
        {isNew ? "Add Task" : "Update Task"}
      </Text>
    </TouchableOpacity>
  </View>
  )
}

export default TaskFormScreen