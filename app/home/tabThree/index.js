import { Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function TabThree() {
  return (
    <>
      <Text>Tab Three</Text>
      <Pressable
        onPress={() => {
          router.push("/home/tabTwo/tabTwoDetail");
        }}
      >
        <Text>Go to Tab Two Detail</Text>
      </Pressable>
    </>
  );
}
