import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The Meal Detail Screen</Text>
			<Button
				title="GoBake"
				onPress={() => {
					props.navigation.pop();
				}}
			/>
			<Button
				title="GoHommie"
				onPress={() => {
					props.navigation.popToTop();
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#00ffff88",
	},
});

export default MealDetailScreen;
