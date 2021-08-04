import React from "react";
import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	SafeAreaView,
	SectionList,
} from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { FontAwesome5, MaterialIcons, Ionicons } from "@expo/vector-icons";
import HeaderButton from "../components/CustomHeaderButton";

import { MEALS, CATEGORIES } from "../data/dummy-data";

function PrintTickOrCross(bool) {
	if (bool.bool === true)
		return (
			<Ionicons
				name="checkmark"
				size={24}
				color="white"
				// style={{ marginHorizontal: -10 }}
			/>
		);
	else
		return (
			<Ionicons
				name="close"
				size={24}
				color="white"
				// style={{ marginHorizontal: 10 }}
			/>
		);
}

const MealDetailScreen = (props) => {
	const mealId = props.navigation.getParam("mealId");
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	const DATA = [
		{
			title: "Ingredients",
			data: selectedMeal.ingredients,
		},
		{
			title: "Recipe",
			data: selectedMeal.steps,
		},
	];
	const renderLine = (itemData) => {
		return (
			<View
				style={{
					flexDirection: "row",
					paddingHorizontal: 25,
					marginRight: 5,
					marginVertical: 2,
				}}
			>
				<Text
					style={{
						flex: 0.09,
						...styles.textStyle,
						textAlign: "left",
						marginRight: 5,
					}}
				>
					{itemData.index + 1}
					{"."}
				</Text>
				<Text
					style={{
						flex: 0.91,
						...styles.textStyle,
						textAlign: "left",
						marginRight: 2,
					}}
				>
					{itemData.item}
				</Text>
			</View>
		);
	};
	function Affordability() {
		if (selectedMeal.affordability === "affordable")
			return (
				<View style={styles.iconViewStyle}>
					<MaterialIcons
						name="attach-money"
						size={20}
						color="white"
					/>
				</View>
			);
		else if (selectedMeal.affordability === "pricey")
			return (
				<View style={styles.iconViewStyle}>
					<MaterialIcons
						name="attach-money"
						size={20}
						color="white"
					/>
					<MaterialIcons
						name="attach-money"
						size={20}
						color="white"
						style={{ margin: -10, padding: -10 }}
					/>
				</View>
			);
		else
			return (
				<View style={styles.iconViewStyle}>
					<MaterialIcons
						name="attach-money"
						size={20}
						color="white"
					/>
					<MaterialIcons
						name="attach-money"
						size={20}
						color="white"
						style={{ margin: -10, padding: -10 }}
					/>
					<MaterialIcons
						name="attach-money"
						size={20}
						color="white"
					/>
				</View>
			);
	}
	function Complexity() {
		if (selectedMeal.complexity === "simple")
			return (
				<View style={styles.iconViewStyle}>
					<FontAwesome5 name="star" size={16} color="white" />
				</View>
			);
		else if (selectedMeal.complexity === "hard")
			return (
				<View style={styles.iconViewStyle}>
					<FontAwesome5 name="star" size={16} color="white" />
					<FontAwesome5 name="star" size={16} color="white" />
				</View>
			);
		else
			return (
				<View style={styles.iconViewStyle}>
					<FontAwesome5 name="star" size={16} color="white" />
					<FontAwesome5 name="star" size={16} color="white" />
					<FontAwesome5 name="star" size={16} color="white" />
				</View>
			);
	}

	return (
		<View style={styles.screen}>
			<View style={styles.cardStyle}>
				<ImageBackground
					source={{ uri: selectedMeal.imageURL }}
					resizeMode="cover"
					style={{
						justifyContent: "flex-start",
						height: 220,
					}}
				>
					<View style={styles.viewStyle}>
						<Text style={styles.titleStyle}>
							{selectedMeal.title}
						</Text>
						<View style={styles.iconViewStyle}>
							<FontAwesome5
								name="hourglass"
								size={18}
								color="white"
							/>
							<Text style={styles.textStyle}>
								{" "}
								{selectedMeal.duration} mins{" |"}
							</Text>
							<Affordability />
							<Text style={styles.textStyle}>{"| "}</Text>
							<Complexity />
						</View>
					</View>
				</ImageBackground>
				<SafeAreaView style={{ flex: 1 }}>
					<SectionList
						ListHeaderComponent={
							<View>
								<View
									style={{
										flexDirection: "row",
										marginHorizontal: 10,
										justifyContent: "space-between",
									}}
								>
									<View style={styles.conditionsViewStyle}>
										<Text
											style={{
												...styles.textStyle,
												fontSize: 16,
											}}
										>
											Vegan
										</Text>
										<PrintTickOrCross
											bool={selectedMeal.isVegan}
										/>
									</View>
									<View style={styles.conditionsViewStyle}>
										<Text
											style={{
												...styles.textStyle,
												fontSize: 16,
											}}
										>
											Vegeterian
										</Text>
										<PrintTickOrCross
											bool={selectedMeal.isVegeterian}
										/>
									</View>
								</View>
								<View
									style={{
										flexDirection: "row",
										margin: 10,
										justifyContent: "space-between",
									}}
								>
									<View style={styles.conditionsViewStyle}>
										<Text
											style={{
												...styles.textStyle,
												fontSize: 16,
											}}
										>
											Gluten Free
										</Text>
										<PrintTickOrCross
											bool={selectedMeal.isGlutenFree}
										/>
									</View>
									<View style={styles.conditionsViewStyle}>
										<Text
											style={{
												...styles.textStyle,
												fontSize: 16,
											}}
										>
											Lactose Free
										</Text>
										<PrintTickOrCross
											bool={selectedMeal.isLatoseFree}
										/>
									</View>
								</View>
							</View>
						}
						contentContainerStyle={{ paddingVertical: 20 }}
						sections={DATA}
						keyExtractor={(item, index) => index.toString() + item}
						renderItem={renderLine}
						renderSectionHeader={({ section: { title } }) => (
							<Text
								style={{
									...styles.titleStyle,
									textAlign: "left",
									margin: 20,
								}}
							>
								{title}
							</Text>
						)}
					/>
				</SafeAreaView>
			</View>
		</View>
	);
};

MealDetailScreen.navigationOptions = (navigationData) => {
	const mealId = navigationData.navigation.getParam("mealId");
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	const headerColor = navigationData.navigation.getParam("headerColor");
	const fontColor = navigationData.navigation.getParam("fontColor");

	return {
		headerTitle: selectedMeal.title,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Favorite"
					iconName="heart-outline"
					onPress={() => {
						console.log("Favorited");
					}}
				/>
			</HeaderButtons>
		),
		headerTintColor: fontColor,
		headerStyle: {
			backgroundColor: headerColor,
			opacity: 0.8,
		},
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#000000",
	},
	cardStyle: {
		flex: 1,
		height: "100%",
		width: "90%",
		margin: 15,
		marginVertical: 25,
		backgroundColor: "#222222",
		borderRadius: 15,
		justifyContent: "flex-start",
		overflow: "hidden",
	},
	viewStyle: {
		backgroundColor: "#00000060",
		height: 220,
		overflow: "hidden",
		padding: 15,
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
	titleStyle: {
		textAlign: "right",
		fontFamily: "roboto-bold",
		fontSize: 25,
		color: "white",
		marginVertical: 3,
	},
	iconViewStyle: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	textStyle: {
		textAlign: "right",
		fontFamily: "roboto-regular",
		fontSize: 14,
		color: "white",
	},
	conditionsViewStyle: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		marginHorizontal: 20,
	},
});

export default MealDetailScreen;
