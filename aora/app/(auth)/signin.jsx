import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButtom from "../../components/custom-button";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    mail: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className=" w-full min-h-[85vh]  justify-center px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />
          <Text className="text-2xl text-white mt-10 font-psemibold">
            Log In
          </Text>

          <FormField
            title="Email"
            value={form.mail}
            handleChangeText={(e) => setForm({ ...form, mail: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            keyboardType="password"
          />

          <View className="">
            <Text className=" mt-2 p-1 text-gray-200">Forgot Password</Text>
          </View>

          <CustomButtom
            handlePress={submit}
            title="Sign In"
            containerStyles="mt-7"
          />

          <View className="flex-row justify-center pt-5 gap-2">
            <Text className="text-md font-pregular text-gray-100">
              Dont have an account?
            </Text>
            <Link
              href="/signup"
              className="text-md font-psemibold text-secondary-100"
            >
              {" "}
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
