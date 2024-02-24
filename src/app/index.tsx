import {View, Image, TouchableOpacity, TextInput, Text} from "react-native"

import { Feather } from '@expo/vector-icons'

import colors from 'tailwindcss/colors'

import logo from "@/assets/logo2.png"

export default function Home() {
  return (
    <View className="flex-1 items-center">
      <Image
        source={logo}
        className="mt-16"
      />

      <View className="flex-1 bg-zinc-800 w-full mt-16">
        <View className="w-full flex flex-row gap-2 px-6 -mt-8">
          <TextInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.zinc[400]}
            className="flex-1 p-4 bg-zinc-50 rounded-md font-body"
          />

          <TouchableOpacity className="p-4 rounded-md bg-blue-400 items-center justify-center">
            <Feather name="plus-circle" size={24} color={colors.zinc[300]}/>
          </TouchableOpacity>
        </View>

        <Text className="text-white text-center mt-16 text-2xl font-heading">Hello world!</Text>
      </View>
    </View>

   
  )  
}