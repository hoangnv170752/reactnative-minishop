import React, {useState} from "react";
import { Pressable, Text, View, Image } from "react-native";
import Input from "../Input";
import { styles } from "./styles";
import { colors } from "../../utils/colors";
const CategoryBox = ({ title, image, onPress, isFirst, isSelected }) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, isFirst ? {marginLeft: 24} : {}]}>
            <View style={[styles.imageContainer, isSelected ? { backgroundColor: colors.black } : {}]}>
                <Image style={styles.image} source={{uri: image}} />
            </View>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}

export default CategoryBox;