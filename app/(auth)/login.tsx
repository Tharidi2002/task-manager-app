import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity
} from "react-native"
import React, { useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "expo-router"

const login = () => {
  const { isUser, login, logOut } = useAuth()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      login()
      router.replace("/")
    }
  }

  return (
    <View className="flex-1 w-full justify-center align-items-center bg-white">
      <TextInput
        placeholder="username"
        placeholderTextColor={"#9ca3af"}
        className="w-full border border-r-gray-300 rounded-md p-3 mb-4"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="password"
        placeholderTextColor={"#9ca3af"}
        className="w-full border border-r-gray-300 rounded-md p-3 mb-4"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        // onChange={(e)=>setPassword(e.target.value)}
      />
      {/* <TouchableOpacity></TouchableOpacity> */}
      <Pressable
        className="bg-blue-600 px-6 py-3 rounded-md"
        onPress={handleLogin}
      >
        <Text className="text-white font-semibold text-center">Login</Text>
      </Pressable>
    </View>
  )
}

export default login
