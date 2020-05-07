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

const Tab = createMaterialTopTabNavigator();

import Home from "./screens/HomeScreen";
import Questlog from "./screens/QuestlogScreen";
import QuestDetail from "./screens/QuestDetailScreen";
import Map from "./screens/MapScreen";
import Profile from "./screens/ProfileScreen";

import { skyRed } from "./styling/colors";

const Stack = createStackNavigator();

const MainView = () => {
  return (
    <Tab.Navigator initialRouteName="Questlog">
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Questlog" component={Questlog} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: skyRed.dark,
            },
          }}
        />
        <Stack.Screen name="QuestDetail" component={QuestDetail} />
        <Stack.Screen name="MainView" component={MainView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
