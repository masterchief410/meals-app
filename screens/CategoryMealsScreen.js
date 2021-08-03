import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
const CategoryMealsScreen = (props) => {
	const catId = props.navigation.getParam("categoryId");
	console.log(catId);
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
	console.log(selectedCategory);

	return (
		<View style={styles.screen}>
			<Text>{selectedCategory.title}</Text>
			<Button
				title="Tap me to go to meal details"
				onPress={() => {
					props.navigation.navigate("MealDetail");
				}}
			/>
			<Button
				title="GoBake"
				onPress={() => {
					props.navigation.goBack();
				}}
			/>
		</View>
	);
};

CategoryMealsScreen.navigationOtions = {
	headerTitle: {selectedCategory.title},
	// headerStyle: {
	// 	backgroundColor: "{selectedCategory.color}",
	// },
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ff000088",
	},
});

export default CategoryMealsScreen;
