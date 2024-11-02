import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, Image, View } from "react-native";
import { Redirect, router } from "expo-router";
import { images } from "../constants";
import { StatusBar } from "expo-status-bar";
import CustomButtom from "../components/custom-button";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center justify-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px] "
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with
              <Text className="text-secondary-200"> Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="font-pregular mt-8 text-center text-sm text-gray-100">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButtom
            title="Continue with Gmail"
            handlePress={() => {
              router.push("/signin");
            }}
            containerStyles="w-full mt-7"
          />

          <CustomButtom
            title="Test Button"
            handlePress={() => {
              router.push("/test");
            }}
            containerStyles="w-full mt-2"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
