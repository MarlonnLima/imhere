import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#131016',
      flex: 1,
      padding: 24
    },
    eventName: {
      color: "#FFF",
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 48
    },
    eventDate: {
      color: '#6b6b6b',
      fontSize: 16
    },
    input: {
        flex: 1,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#1F1E25",
        padding: 16,
        color: "#FFF",
        fontSize: 16,
        marginRight: 12
    },
    buttonText: {
        color: "#FFF",
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#31CF67",
        alignItems: "center",
        justifyContent: "center"
    },
    form: {
        width: "100%",
        flexDirection: "row",
        marginTop: 36,
        marginBottom: 42
    }
  });
  