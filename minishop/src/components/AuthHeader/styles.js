import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 54
    },
    title: {
        fontSize: 26,
        marginLeft: 16,
        color: '#4F63AC',
        fontWeight: 'bold',
        paddingHorizontal: 16
    },
    image: {
        color: colors.blue,
        width: 18,
        height: 18
    }
});