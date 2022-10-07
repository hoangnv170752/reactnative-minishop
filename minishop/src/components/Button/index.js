import { Pressable, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const Button = ({title}) => {
    const handlePress = () => {
        console.log('Clicked!!!')
    }
    return(
        <TouchableOpacity activeOpacity={0.6} style={styles.container} onPress={handlePress} hitSlop={20}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;