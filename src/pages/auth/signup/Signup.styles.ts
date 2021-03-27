import { StyleSheet } from "react-native";
import theme from "../../../constants/theme";

export default StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: theme.light,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "6%",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    color: theme.primaryColor,
  },
  subtitle: {
    paddingTop: 16,
    fontSize: 14,
    textAlign: "center",
    color: theme.primaryColor,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  subtitleSpan: {
    color: theme.accentColor,
    fontWeight: "600",
    paddingTop: 16,
    fontSize: 14,
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  row: {
    flexDirection: "row",
  },
  authBtnsContainer: {
    marginTop: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputsContainer: {
    width: "100%",
  },
  forgotPassLabel: {
    fontSize: 12,
    color: theme.darkGrey,
  },
  privacityLabel: {
    fontSize: 12,
    color: theme.darkGrey,
    paddingVertical: 16,
  },
  scroll: {
    paddingBottom: 150,
  }
});
