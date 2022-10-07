import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        paddingVertical: 20,
        paddingHorizontal: 100,
        borderRadius: 8,
    },
    title: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    }
});