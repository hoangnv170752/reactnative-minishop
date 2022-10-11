import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding:10,
    },
    agreeRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    agreeText: {
        color: colors.blue,
        marginHorizontal: 13
    },
    agreeTextBold: {
        fontWeight: 'bold'
    },
    button: {
        marginTop: 10
    },
    signin: {
        color: colors.blue,
    },
    signinbold: {
        fontWeight: 'bold'
    },
    signincontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 10
    }
})