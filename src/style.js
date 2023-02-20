import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // width: "100%",
        height: "100%",
        marginTop: 50,
        alignItems: "center",
        justifyContent: 'flex-start',
        backgroundColor: "#EDFAF6"
    },
    content: {
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#7CEFCE",
        width: "100%",
        height: "100%",
        borderRadius: 40
    },
    titleView: {
        height: 100,
        justifyContent:  "center",
        alignItems: "center",
        width: "100%",
        // backgroundColor: "#f5f5f5",
        // borderBottomRightRadius: 50,
        // borderBottomLeftRadius: 50,
    },
    titulo: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        fontSize: 30,
    },
    inputsParentView: {
        width: "100%",
        marginTop: 50
    },
    input: {
        marginTop: 10,
        backgroundColor: "#A6D2C6",
        width: "85%",
        alignSelf: "center",
        borderRadius: 50,
        height: 40,
    },
    buttonView: {
        marginTop: 30,
        height: "40%",
        width: "50%",
        justifyContent: "space-around"
    },
    button: {
        justifyContent: "center",
        alignItems:"center",
        width: "100%",
        backgroundColor: "#2A7862",
        borderRadius: 50,
        height: "15%"
    },
    buttonText: {
        color: "white",
        fontSize: 16
    },
    result: {
        fontSize: 20,
        fontWeight: "bold"
    }
    
})
