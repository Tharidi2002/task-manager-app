import { View, Text, Pressable } from "react-native"
import React, { useEffect } from "react"
import { getAllTask } from "@/services/taskService"
import { MaterialIcons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

const TasksScreen = () => {
  const handleFetchData = async () => {
    await getAllTask()
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    handleFetchData()
  }, [])

  const router = useRouter()

  return (
    <View className="flex-1 w-full justify-center items-center bg-white px-4">
    {/* Title */}
    <Text className="text-center text-4xl font-bold mb-8 text-gray-800">
      Tasks
    </Text>

    {/* Add Task Button */}
    <View className="absolute bottom-5 right-5">
      <Pressable
        className="flex-row items-center bg-blue-500 px-5 py-3 rounded-3xl shadow-md active:opacity-80"
        onPress={() => {
          router.push("/(dashboard)/tasks/new");
        }}
      >
        <MaterialIcons name="add" size={28} color="white" />
      </Pressable>
    </View>
  </View>
  )
}

export default TasksScreen
