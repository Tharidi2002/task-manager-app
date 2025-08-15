import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack, Tabs } from 'expo-router'
import {MaterialIcons} from '@expo/vector-icons';

const DashboardLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name='home' options={{title: 'Home', tabBarIcon: (data) => <MaterialIcons name='home-filled' size={data.size} color={data.color} />}}/>
      <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: (data) => <MaterialIcons name='person' size={data.size} color={data.color} /> }} />
      <Tabs.Screen name="tasks/index" options={{ title: "Tasks", tabBarIcon: (data) => <MaterialIcons name='check-circle' size={data.size} color={data.color} /> }} />
      <Tabs.Screen name="setting" options={{ title: "Settings", tabBarIcon: (data) => <MaterialIcons name='settings' size={data.size} color={data.color} /> }} />  
      </Tabs>
  )
}

export default DashboardLayout