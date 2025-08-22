import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { createTask } from '@/services/taskService'

const TaskFormScreen = () => {
    const { id } = useLocalSearchParams<{id: string}>()
    //params.id = {id}
    const isNew = !id || id === 'new'   //null or id is new - save

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const router = useRouter()

    const handleSubmit = async () => {
        // validation
        if(!title.trim){
            Alert.alert("Validation Error", "Title is required")
            return
        }

        try{
            if(isNew){
                await createTask({ title, description })
            }
            router.back()
        }catch(err){
            console.error("Error creating task:", err)
            Alert.alert("Error", "Failed to save task")
        }
    }

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
    <TouchableOpacity className="bg-blue-500 py-4 rounded-2xl shadow-md active:opacity-80" onPress={handleSubmit}>
      <Text className="text-white text-center text-lg font-semibold">
        {isNew ? "Add Task" : "Update Task"}
      </Text>
    </TouchableOpacity>
  </View>
  )
}

export default TaskFormScreen