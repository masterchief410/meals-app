import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
	return (
		<View {...props} style={{ ...styles.card, ...props.style }}>
			{props.children}
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		padding: 15,
		borderWidth: 1,
		borderRadius: 10,
		height: 15,
	},
});

export default Card;
