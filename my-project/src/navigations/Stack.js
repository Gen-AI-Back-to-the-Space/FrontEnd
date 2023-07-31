import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Landing, Chat } from "../screens";

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen
        name="Chat"
        component={Chat}

        // options={{
        //   title: "Conversation",
        //   headerStyle: {
        //     backgroundColor: "#000000",
        //   },
        //   headerTintColor: "#ffffff",
        // }}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
