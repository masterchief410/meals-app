import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";

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

export default createAppContainer(MealsNavigator);
