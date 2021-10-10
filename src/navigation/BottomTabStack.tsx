import React, { ReactElement } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import SettingsScreen from "../screens/dashboard/settings";
import DetailScreen from "../screens/dashboard/detail";
import HomeScreen from "../screens/dashboard/home";
import { NavigationNames } from "../constants/navigation-names";

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Detail: undefined;
};

const getHeaderTitle = (route): string => {
  const routeName = getFocusedRouteNameFromRoute(route);

  return routeName ?? "";
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabStack = ({ navigation, route }): ReactElement => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route)
    });
  }, [ navigation, route ]);

  return (
    <Tab.Navigator initialRouteName={"Home"}
    >
      <Tab.Screen name={NavigationNames.Home}
        component={HomeScreen}
        options={{
          title: "Home"
        }}/>
      <Tab.Screen name={NavigationNames.Detail}
        component={DetailScreen}
        options={{
          title: "Detail"
        }}/>
      <Tab.Screen name={NavigationNames.Settings}
        component={SettingsScreen}
        options={{
          title: "Settings"
        }}/>
    </Tab.Navigator>
  );
};

export default BottomTabStack;
