/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

import Home from "./screens/HomeScreen";
import Questlog from "./screens/QuestlogScreen";
import QuestDetail from "./screens/QuestDetailScreen";
import Map from "./screens/MapScreen";
import Profile from "./screens/ProfileScreen";

import { skyBlue } from "./styling/colors";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const MainView = () => {
  const insets = useSafeAreaInsets();
  console.log("hello insets: ", insets);
  return (
    <Tab.Navigator
      initialRouteName="Map"
      swipeEnabled={false} // map is hard to use when swipe:abel
      tabBarOptions={{
        style: { backgroundColor: skyBlue.dark, elevation: 0, paddingTop: insets.top },
        activeTintColor: "white",
        renderIndicator: () => null,
        labelStyle: {
          fontFamily: "Montserrat-Medium",
          fontVariant: ["small-caps"],
          fontSize: 18,
        },
      }}>
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Questlog" component={Questlog} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MainView"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="QuestDetail"
            component={QuestDetail}
            options={{ headerShown: true, headerTransparent: true, headerTintColor: "#fff" }}
          />
          <Stack.Screen name="MainView" component={MainView} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
