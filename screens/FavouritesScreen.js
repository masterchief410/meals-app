import React from "react";

import { MEALS, FAVOURITES } from "../data/dummy-data";
import MealList from "../components/MealList";

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

export default FavouritesScreen;
