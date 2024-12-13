import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1A1A"
    },

    backHeader: {
        height: "25%",
        backgroundColor: "#0d0d0d",
        justifyContent: "center",
        alignItems: "center",
    },

    taskForm: {
        marginTop: -30,
        alignSelf: "center",
        flexDirection: "row",
        gap: 4,
        height: 54,
        marginHorizontal: 24,
    },

    taskInput: {
        width: 271,
        backgroundColor: "#262626",
        borderRadius: 6,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#f2f2f2",
        borderStyle: "solid",
        borderColor: "#0d0d0d",
        borderWidth: 1,
        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        // Android shadow
        elevation: 5,
    },

    addTaskButton: {
        width: 54,
        backgroundColor: "#1E6F9F",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
    },


    taskCountersContainer: {
        marginTop: 32,
        marginHorizontal: 24,
        paddingBottom: 32,
        flexDirection: "row",
        justifyContent: "space-between",
        borderStyle: "solid",
        borderColor: "#808080",
        borderBottomWidth: 1,

    },

    taskCounterGroup: {
        flexDirection: "row",
        gap: 8,
    },

    taskCounterSection: {
        fontWeight: "bold",
        color: "#8284FA",

    },

    taskCounter: {
        paddingHorizontal: 8,
        borderRadius: 999,
        color: "#D9D9D9",
        backgroundColor: "#333333",
    },

})
