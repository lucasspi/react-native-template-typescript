import { StyleSheet } from "react-native";
import theme from "../../../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primaryColor,
    justifyContent: "space-between",
    alignItems: "center",
    padding: "6%",
  },
  logoContainer: {
    flex: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    // flex: 2,
    height: 170,
  },
  logo: {
    height: "18%",
    width: "45%",
    marginBottom: 60,
  },
  btnContainer: {
    flex: 2,
    width: "100%",
  },
  dotStyle: {
    width: 6,
    height: 6,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  containerCardItem: {
    backgroundColor: theme.primaryColor,
    paddingBottom: 40,
  },
  header: {
    color: theme.light,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
    paddingBottom: 16,
  },
  body: {
    textAlign: "center",
    color: theme.light,
    fontSize: 14,
  },
});
