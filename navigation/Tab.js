import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Coins from "../screens/Coins";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { useColorScheme } from "react-native";
import {
  YELLOW_COLOR,
  BLACK_COLOR,
  DARK_GREY,
  LIGHT_GREY,
  PINK_COLOR,
} from "../colors";
import { Ionicons, FontAwesome5, FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

// 1. 렌더링할 컴포넌트 생성
// 2. 스크린 생성, 모든 스크린은 name 과 component를 가진다.
const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? BLACK_COLOR : "white",
        },
        tabBarActiveTintColor: isDark ? PINK_COLOR : BLACK_COLOR,
        tabBarInactiveTintColor: isDark ? DARK_GREY : LIGHT_GREY,
        headerStyle: {
          backgroundColor: isDark ? BLACK_COLOR : "white",
        },
        headerTitleStyle: {
          color: isDark ? PINK_COLOR : BLACK_COLOR,
          marginLeft: 170,
        },
        // headerTitle: {
        //   height,
        // },
        tabBarLabelStyle: {
          marginTop: -5,
          fontSixe: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Coins"
        component={Coins}
        options={{
          tabBarIcon: ({ color = "black", size = 24 }) => {
            return <FontAwesome5 name="coins" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Prices"
        component={Tv}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="dollar" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="News"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="newspaper-o" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
