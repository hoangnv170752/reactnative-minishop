import { Pressable, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const GoogleLogin = ({onPress}) => {
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.container}>
            <Image source = {require('../../assets/Vector.png')} style ={styles.image} />
        </TouchableOpacity>
    )
}

export default GoogleLogin;