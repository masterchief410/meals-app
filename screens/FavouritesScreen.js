import React from "react";

import { MEALS, FAVOURITES } from "../data/dummy-data";
import MealList from "../components/MealList";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/CustomHeaderButton";

const FavouritesScreen = (props) => {
    const displayedMeals = MEALS.filter(
        (meal) => FAVOURITES.indexOf(meal.id) >= 0
    );

    return (
        <MealList
            listData={displayedMeals}
            navigation={props.navigation}
            headerColor={"#222222"}
            fontColor={"#ffffff"}
        />
    );
};

FavouritesScreen.navigationOptions = (navData) => {
    return {
        headerLeft: () => (
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

export default FavouritesScreen;
