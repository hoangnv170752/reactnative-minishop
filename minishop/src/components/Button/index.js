import { Pressable, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const Button = ({title, onPress, style}) => {
    return(
        <TouchableOpacity activeOpacity={0.6} style={[styles.container, style]} onPress={onPress} hitSlop={20}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;