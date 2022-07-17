import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    await Font.loadAsync(Ionicons.font);
    await Asset.loadAsync(require("./image2.jpg"));
    await Image.prefetch(
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1756%2Fe89a0686.thumb_1006_280.jpg&w=1060&q=100"
    );
  };
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  return <Text>We are done loading!</Text>;
}
