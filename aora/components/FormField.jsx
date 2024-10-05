import { View, Text, TextInput } from "react-native";
import React from "react";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
  ...props
}) => {
  return (
    <View className={`${otherStyles} space-y-2`}>
      <Text className="text-gray-100 text-base font-pmedium">{title}</Text>
      <View className="w-full h-16 px-4 items-center bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary-100">
        {/* text being input here */}
        <TextInput
          value={value}
          onChangeText={handleChangeText}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export default FormField;
