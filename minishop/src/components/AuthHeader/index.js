import { Pressable, Text, TouchableOpacity, View , Image} from "react-native";
import { styles } from './styles';

const AuthHeader = ({title, onBackPress }) => {
    return (
        <View style={styles.container}>
            <Pressable hitSlop={20} onPress={onBackPress}>
                <Image source={require('../../assets/return.png')} style={styles.image}/>
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default AuthHeader;