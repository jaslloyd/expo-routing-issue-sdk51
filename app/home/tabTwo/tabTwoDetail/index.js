import { Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function TabTwoDetail() {
  return (
    <>
      <Text>Tab Two Detail</Text>
      <Pressable
        onPress={() => {
          router.back();
        }}
      >
        <Text>Go Back</Text>
      </Pressable>
    </>
  );
}
