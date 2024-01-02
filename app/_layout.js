import { Stack, router } from "expo-router";
import { useEffect } from "react";

export default function Layout() {
  useEffect(() => {
    router.push("/home/tabOne");
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false, gestureEnabled: false }} />
  );
}
