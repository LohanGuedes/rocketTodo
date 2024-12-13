import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: 8,
        height: 64,
        flexDirection: "row",
        backgroundColor: "#262626",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 12,
        borderRadius: 8,
    },

    taskUndone: {
        color: "#F2F2F2",
        maxWidth: "80%",
    },


    taskDone: {
        color: "#808080",
        maxWidth: "80%",
        textDecorationLine: "line-through"
    }
})
