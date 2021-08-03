import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Button,
	TouchableOpacity,
} from "react-native";
import CategoryMealsScreen from "./CategoryMealsScreen";

import { CATEGORIES } from "../data/dummy-data";
import Card from "../components/Card";

const CategoriesScreen = (props) => {
	const renderGridItem = (itemData) => {
		return (
			<TouchableOpacity
				onPress={() => {
					props.navigation.navigate({
						routeName: "CategoryMeals",
						params: { categoryId: itemData.item.id },
					});
				}}
				style={{
					flex: 1,
					margin: 10,
				}}
			>
				<Card
					style={{
						height: 150,
						backgroundColor: itemData.item.color,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text style={{ fontFamily: "roboto-medium", fontSize: 20 }}>
						{itemData.item.title}
					</Text>
				</Card>
			</TouchableOpacity>
		);
	};

	return (
		<FlatList
			//keyExtractor={(item, index) => item.id}
			numColumns={2}
			data={CATEGORIES}
			renderItem={renderGridItem}
		/>
	);
};

CategoriesScreen.navigationOptions = {
	headerShow: true,
	headerTitle: "Meal Categories",
	headerStyle: {
		backgroundColor: "#ffc7ff",
	},
	headerTintColor: "black",
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ff00ff88",
	},

	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
	},
});

export default CategoriesScreen;
