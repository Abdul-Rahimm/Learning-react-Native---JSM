import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Test() {
  return (
    <SafeAreaView>
      <View className="h-full bg-red-200">
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
}
