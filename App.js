import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import MealsNavigator from "./navigation/MealsNavigator";

enableScreens(true);

const fetchFonts = () => {
    return Font.loadAsync({
        "roboto-bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
        "roboto-medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
        "roboto-regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
        "roboto-light": require("./assets/fonts/Roboto/Roboto-Light.ttf"),
    });
};

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
                onError={(err) => console.log(err)}
            />
        );
    }

    return <MealsNavigator />;
}
