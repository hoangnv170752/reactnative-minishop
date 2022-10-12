import React, {useState} from "react";
import { View, Text, Pressable, Image } from 'react-native';
import {styles} from './styles';
import Input from "../Input";

const Header = ({ title, onBackPress, onSearch, onLogout, showLogout, showSearch, keyword, showBack }) => {
    const [showSearchInput, setShowSearchInput] = useState(false);
    const onSearchClick = () => {
        setShowSearchInput(s => !s)
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
            {showBack ? (
                <Pressable hitSlop={20} onPress={onBackPress}>
                    <Image source={require('../../assets/return.png')} style={styles.image}/>
                </Pressable>
            ) : showSearch ? (
                <Pressable hitSlop={20} onPress={onSearchClick}>
                    <Image source={require('../../assets/search.png')} style={styles.image}/>
                </Pressable>
            ) : <View style={styles.space}/>}
            <Text style={styles.title}>{title}</Text>
            {showLogout ? (
                <Pressable hitSlop={20} onPress={onLogout}>
                    <Image source={require('../../assets/logout.png')} style={styles.image}/>
                </Pressable>
            ) : <View style={styles.space} />}
            </View>
            {showSearchInput ? (
                <Input onChangeText={onSearch} value={keyword} placeholder="Type your keyword..." />
            ) : null}
        </View>
    )
}

export default Header;