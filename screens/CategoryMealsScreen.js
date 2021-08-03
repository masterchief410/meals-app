import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import CategoryMealGridTile from "../components/CategoryMealsGridTile";

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

    const displayedMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(catId) >= 0
    );

    const renderMealItem = (itemData) => {
        return (
            <CategoryMealGridTile
                item={itemData.item}
                onSelectMeal={() =>
                    props.navigation.navigate({
                        routeName: "MealDetail",
                        params: { mealId: itemData.item.id },
                    })
                }
            />
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList
                style={{ width: "100%" }}
                data={displayedMeals}
                renderItem={renderMealItem}
            />
        </View>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: selectedCategory.color,
            opacity: 0.8,
        },
        headerTintColor: "black",
    };
};
const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#000000",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
});

export default CategoryMealsScreen;
