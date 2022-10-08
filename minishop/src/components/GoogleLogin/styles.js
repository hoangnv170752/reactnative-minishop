import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGray,
        borderRadius: 14,
        width: '40%',
        alignSelf: 'center',
    },
    image: {
        width: 30,
        height: 30,
    }
});