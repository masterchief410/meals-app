import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealDetailScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Meal Detail Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00ffff88",
    },
});

export default MealDetailScreen;
