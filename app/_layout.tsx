import { View, Text, SafeAreaView } from "react-native"
import React from "react"
import "./../global.css"
import { Link, Slot, usePathname } from "expo-router"
import FooterNav from "@/components/FooterNav"
import { AuthProvider } from "@/context/AuthContext"

const RootLayout = () => {
  const pathname = usePathname()
  console.log(pathname)

  const hideFoter = ["/signup", "/login"].includes(pathname)

  return (
    <AuthProvider>
      <SafeAreaView className="flex-1 bg-green-400">
        <Slot />

        {hideFoter ? null : <FooterNav />}
      </SafeAreaView>
    </AuthProvider>
  )
}

export default RootLayout
