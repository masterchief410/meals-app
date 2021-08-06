import React from "react";
import {
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
    processColor,
} from "react-native";
import Card from "./Card";

import { LinearGradient } from "expo-linear-gradient";

const CategoryGridTile = (props) => {
    return (
        <View
            style={{
                flex: 1,
                overflow: "hidden",
                borderRadius: 10,
                margin: 10,
                backgroundColor: "black",
            }}
        >
            <LinearGradient
                colors={[`${props.item.color}a0`, props.item.color]}
                style={{
                    flex: 1,
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

                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "roboto-light",
                                fontSize: 20,
                                color: "black",
                            }}
                        >
                            {props.item.title}
                        </Text>
                    </Card>
                </TouchableNativeFeedback>
            </LinearGradient>
        </View>
    );
};

export default CategoryGridTile;
