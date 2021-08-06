import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/CustomHeaderButton";

const FiltersScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Filters Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffff88",
    },
});

FiltersScreen.navigationOptions = (navData) => {
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

export default FiltersScreen;
