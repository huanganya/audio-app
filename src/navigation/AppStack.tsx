import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabStack from "./BottomTabStack";
import PlayScreen from "@src/screens/dashboard/play";
import InfoScreen from "@src/screens/dashboard/info";
import LoginScreen from "@src/screens/login";
import WelcomeScreen from "@src/screens/welcome";
import RegisterScreen from "@src/screens/register";
import { NavigationNames } from "@src/constants/navigation-names";

type RootStackParamList = {
  Login: undefined;
  Welcome: undefined;
  Dashboard: undefined;
  Play: undefined;
  Info: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppStack = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Welcome"}
        screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          name={NavigationNames.Welcome}
          component={WelcomeScreen}
          options={{
            headerShown: false,
            // title: "Welcome",
          }}
        />
        <Stack.Screen
          name={NavigationNames.Login}
          component={LoginScreen}
          options={{
            title: "Login",
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name={NavigationNames.Register}
          component={RegisterScreen}
          options={{
            title: "Register",
          }}
        />
        <Stack.Screen
          name={NavigationNames.Dashboard}
          component={BottomTabStack}
          options={{
            headerLeft: () => null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={NavigationNames.Info}
          component={InfoScreen}
          options={{
            title: "Info",
          }}
        />
        <Stack.Screen
          name={NavigationNames.Play}
          component={PlayScreen}
          options={{
            title: "Play",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
