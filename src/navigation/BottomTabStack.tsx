import React, { ReactElement } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import SettingsScreen from "../screens/dashboard/settings";
import PlaylistScreen from "../screens/dashboard/playlist";
import HistoryScreen from "../screens/dashboard/history";
import HomeScreen from "../screens/dashboard/home";
import { NavigationNames } from "../constants/navigation-names";

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Playlist: undefined;
  History: undefined;
};

const getOptions = (route): string => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const headerShown =
    routeName !== undefined && routeName !== NavigationNames.Home;
  return {
    headerTitle: routeName ?? "",
    headerShown,
  };
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabStack = ({ navigation, route }): ReactElement => {
  React.useLayoutEffect(() => {
    navigation.setOptions(getOptions(route));
  }, [navigation, route]);

  return (
    <Tab.Navigator initialRouteName={"Home"}>
      <Tab.Screen
        name={NavigationNames.Home}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={NavigationNames.Playlist}
        component={PlaylistScreen}
        options={{
          title: "Playlist",
        }}
      />
      <Tab.Screen
        name={NavigationNames.History}
        component={HistoryScreen}
        options={{
          title: "History",
        }}
      />
      <Tab.Screen
        name={NavigationNames.Settings}
        component={SettingsScreen}
        options={{
          title: "Settings",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
