import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

import { Ionicons } from "@expo/vector-icons";

const MealsNavigator = createStackNavigator(
	{
		Categories: {
			screen: CategoriesScreen,
			navigationOptions: {
				headerTitle: "Meal Categories",
			},
		},
		CategoryMeals: {
			screen: CategoryMealsScreen,
		},
		MealDetail: MealDetailScreen,
	},
	{
		defaultNavigationOptions: {
			headerTitleAlign: "left",
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: "#222222",
			},
			headerTitleStyle: {
				fontFamily: "roboto-regular",
			},
		},
	}
);

const FavNavigator = createStackNavigator(
	{
		Favourites: FavouritesScreen,
		MealDetail: MealDetailScreen,
	},
	{
		defaultNavigationOptions: {
			headerTitleAlign: "left",
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: "#222222",
			},
			headerTitleStyle: {
				fontFamily: "roboto-regular",
			},
		},
	}
);

const MealsFavTabNavigator = createBottomTabNavigator(
	{
		Meals: MealsNavigator,
		Favourites: FavNavigator,
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				let IconComponent = Ionicons;
				let iconName;

				if (routeName === "Meals")
					iconName = focused ? "fast-food" : "fast-food-outline";
				else if (routeName === "Favourites")
					iconName = focused ? "heart" : "heart-outline";

				return (
					<IconComponent
						name={iconName}
						size={23}
						color={tintColor}
					/>
				);
			},
		}),

		tabBarOptions: {
			inactiveBackgroundColor: "#222222",
			activeBackgroundColor: "#222222",
			inactiveTintColor: "#888888",
			activeTintColor: "#ffffff",

			fontFamily: "roboto-regular",
		},
	}
);

const FilterNavigator = createStackNavigator(
	{
		Filters: FiltersScreen,
	},
	{
		defaultNavigationOptions: {
			headerTitle: "Filters",
			headerTitleAlign: "left",
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: "#222222",
			},
			headerTitleStyle: {
				fontFamily: "roboto-regular",
			},
		},
	}
);
const MainNavigator = createDrawerNavigator({
	MealsFavs: MealsFavTabNavigator,
	Filters: FilterNavigator,
});

export default createAppContainer(MainNavigator);
