import React from "react";

import { View, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import CategoryMealGridTile from "../components/CategoryMealsGridTile";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

    const displayedMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(catId) >= 0
    );

    return (
        <MealList
            listData={displayedMeals}
            navigation={props.navigation}
            headerColor={selectedCategory.color}
            fontColor={"#000000"}
        />
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: selectedCategory.color,
        },
        headerTintColor: "black",
    };
};

export default CategoryMealsScreen;
