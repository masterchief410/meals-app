import React from "react";
import { StyleSheet, FlatList } from "react-native";
import CategoryMealsScreen from "./CategoryMealsScreen";

import { CATEGORIES } from "../data/dummy-data";
import Card from "../components/Card";
import CategoryGridTile from "../components/CategoryGridTile";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/CustomHeaderButton";

const CategoriesScreen = (props) => {
	const renderGridItem = (itemData) => {
		return (
			<CategoryGridTile
				item={itemData.item}
				onSelect={() =>
					props.navigation.navigate({
						routeName: "CategoryMeals",
						params: { categoryId: itemData.item.id },
					})
				}
			/>
		);
	};

	return (
		<FlatList
			contentContainerStyle={styles.screen}
			//keyExtractor={(item, index) => item.id}
			numColumns={2}
			data={CATEGORIES}
			renderItem={renderGridItem}
		/>
	);
};

CategoriesScreen.navigationOptions = (navData) => {
	console.log(navData.navigation);
	return {
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Menu"
					iconName="ios-menu"
					color="#ffffff"
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	screen: {
		backgroundColor: "#000000",
	},
});

export default CategoriesScreen;
