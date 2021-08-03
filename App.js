import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import MealsNavigator from "./navigation/MealsNavigator";

const fetchFonts = () => {
	Font.loadAsync({
		"roboto-bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
		"roboto-medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
		"roboto-regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
