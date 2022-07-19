import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { useColorScheme } from "react-native";
import { YELLOW_COLOR, BLACK_COLOR, DARK_GREY, LIGHT_GREY } from "../colors";

const Tab = createBottomTabNavigator();

// 1. 렌더링할 컴포넌트 생성
// 2. 스크린 생성, 모든 스크린은 name 과 component를 가진다.
const Tabs = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Tv" component={Tv} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};
export default Tabs;
