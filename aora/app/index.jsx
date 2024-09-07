import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="bg-red-400 flex flex-1 items-center justify-center">
      <Text className="text-xl font-semibold font-pblack text-center">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
      <Link href={"/profile"}>Profile 1</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
