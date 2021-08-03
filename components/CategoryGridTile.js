import React from "react";
import {
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
} from "react-native";
import Card from "./Card";

const CategoryGridTile = (props) => {
    return (
        <View
            style={{
                flex: 1,
                margin: 10,
                overflow: "hidden",
                borderRadius: 10,
            }}
        >
            <TouchableNativeFeedback
                onPress={props.onSelect}
                style={{ flex: 1, borderRadius: 100, overflow: "hidden" }}
            >
                <Card
                    style={{
                        height: 150,
                        backgroundColor: props.item.color,
                        opacity: 0.8,
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "roboto-regular",
                            fontSize: 20,
                        }}
                    >
                        {props.item.title}
                    </Text>
                </Card>
            </TouchableNativeFeedback>
        </View>
    );
};

export default CategoryGridTile;
