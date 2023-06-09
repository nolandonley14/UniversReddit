import React, { createContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CustomWebView from "../screens/PicWebView";

export type MainStackParamList = {
  Home: undefined;
  Pic: { 
    url: string,
    name: string
  };
}

const Stack = createNativeStackNavigator<MainStackParamList>();


export const GetMainAppComponents = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          headerShown: false,
          headerShadowVisible: false
        }}
      />
      <Stack.Screen
        name={"Pic"}
        component={CustomWebView}
        options={{
          headerShown: false,
          headerShadowVisible: false
        }}
      />
    </Stack.Navigator>
);
  
