import { TouchableOpacity, Text } from "react-native";

import React from "react";

const CustomButtom = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`${containerStyles} ${
        isLoading ? "opacity-50" : ""
      } bg-secondary py-4 rounded-xl min-h-[64px] items-center justify-center`}
      disabled={isLoading}
    >
      <Text className={`text-primary text-lg font-psemibold ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButtom;
