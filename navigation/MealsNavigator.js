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

const defStackNavOptions = {
    headerTintColor: "white",
    headerTitleAlign: "center",
    headerStyle: {
        backgroundColor: "#222222",
    },
    headerTitleStyle: {
        fontFamily: "roboto-light",
        fontSize: 22,
    },
};

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
        defaultNavigationOptions: defStackNavOptions,
    }
);

const FavNavigator = createStackNavigator(
    {
        Favourites: FavouritesScreen,
        MealDetail: MealDetailScreen,
    },
    {
        defaultNavigationOptions: defStackNavOptions,
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
                        size={21}
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

            labelStyle: { fontFamily: "roboto-light", fontSize: 11 },
        },
    }
);

const FilterNavigator = createStackNavigator(
    {
        Filters: FiltersScreen,
    },
    {
        defaultNavigationOptions: defStackNavOptions,
    }
);
const MainNavigator = createDrawerNavigator(
    {
        MealsFavs: {
            screen: MealsFavTabNavigator,
            navigationOptions: {
                drawerLabel: "Meals",
            },
        },
        Filters: {
            screen: FilterNavigator,
            navigationOptions: {
                drawerLabel: "Filters",
            },
        },
    },
    {
        contentOptions: {
            activeBackgroundColor: "#000000",
            inactiveTintColor: "#888888",
            activeTintColor: "#ffffff",
            labelStyle: {
                fontSize: 20,
                fontFamily: "roboto-light",
                fontWeight: "normal",
            },
            itemsContainerStyle: { marginTop: 40 },
        },
        drawerBackgroundColor: "#222222",
    }
);

export default createAppContainer(MainNavigator);
