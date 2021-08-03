import React from "react";
import {
    ImageBackground,
    Text,
    TouchableNativeFeedback,
    View,
    StyleSheet,
} from "react-native";
import Card from "./Card";

import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CategoryMealGridTile = (props) => {
    function Affordability() {
        if (props.item.affordability === "affordable")
            return (
                <View style={styles.iconViewStyle}>
                    <MaterialIcons
                        name="attach-money"
                        size={20}
                        color="white"
                    />
                </View>
            );
        else if (props.item.affordability === "pricey")
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
        if (props.item.complexity === "simple")
            return (
                <View style={styles.iconViewStyle}>
                    <FontAwesome5 name="star" size={16} color="white" />
                </View>
            );
        else if (props.item.complexity === "hard")
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
        <View style={styles.viewStyle}>
            <ImageBackground
                source={{ uri: props.item.imageURL }}
                resizeMode="cover"
                style={{ flex: 1, justifyContent: "center", width: "100%" }}
            >
                <TouchableNativeFeedback onPress={props.onSelectMeal}>
                    <Card style={styles.cardStyle}>
                        <Text style={styles.titleStyle}>
                            {props.item.title}
                        </Text>
                        <View style={styles.iconViewStyle}>
                            <FontAwesome5
                                name="hourglass"
                                size={18}
                                color="white"
                            />
                            <Text style={styles.textStyle}>
                                {" "}
                                {props.item.duration} mins{" |"}
                            </Text>
                            <Affordability />
                            <Text style={styles.textStyle}>{"| "}</Text>
                            <Complexity />
                        </View>
                    </Card>
                </TouchableNativeFeedback>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        textAlign: "right",
        fontFamily: "roboto-regular",
        fontSize: 14,
        color: "white",
    },
    titleStyle: {
        textAlign: "right",
        fontFamily: "roboto-regular",
        fontSize: 21,
        color: "white",
        marginVertical: 3,
    },
    cardStyle: {
        height: 150,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        backgroundColor: "#00000080",
        width: "100%",
    },
    viewStyle: {
        marginVertical: 10,
        marginHorizontal: 20,
        overflow: "hidden",
        borderRadius: 10,
    },
    iconViewStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CategoryMealGridTile;
