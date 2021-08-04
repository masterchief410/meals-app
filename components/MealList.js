import React from "react";
import { View, StyleSheet, FlatList, TextPropTypes } from "react-native";

import CategoryMealGridTile from "../components/CategoryMealsGridTile";

const MealList = (props) => {
	const renderMealItem = (itemData) => {
		return (
			<CategoryMealGridTile
				item={itemData.item}
				onSelectMeal={() =>
					props.navigation.navigate({
						routeName: "MealDetail",
						params: {
							mealId: itemData.item.id,
							headerColor: props.headerColor,
							fontColor: props.fontColor,
						},
					})
				}
			/>
		);
	};

	return (
		<View style={styles.list}>
			<FlatList
				style={{ width: "100%" }}
				data={props.listData}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	list: {
		backgroundColor: "#000000",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
});

export default MealList;
