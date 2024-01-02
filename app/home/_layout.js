import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="tabOne"
        options={{
          headerShown: false,
          tabBarLabel: "Tab One",
        }}
      />
      <Tabs.Screen
        name="tabTwo"
        options={{
          headerShown: false,
          tabBarLabel: "Tab Two",
        }}
      />
      <Tabs.Screen
        name="tabThree"
        options={{
          headerShown: false,
          tabBarLabel: "Tab Three",
        }}
      />
    </Tabs>
  );
}
