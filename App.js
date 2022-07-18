import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import * as Font from "expo-font";
import { Asset, useAssets } from "expo-asset";
import { Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [assets] = useAssets([require("./crypto.png")]);
  const [loaded] = Font.useFonts(Ionicons.font);
  if (!assets || !loaded) {
    return <AppLoading />;
  }
  return <Text>We are done loading!</Text>;
}
