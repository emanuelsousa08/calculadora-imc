import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingTop: 30,
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    width: "100%",
    height: "auto",
  },
  formLabel: {
    color: "black",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f1f2f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#fff",
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff4757",
    width: "90%",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 20,
  },
  errorMessage: {
    fontSize: 12,
    color: "#EA2027",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exhibitionResultImc: {
    width: "100%",
    height: "50%",
  },
  listImcs: {
    marginTop: 20,
  },
  resultImcItem: {
    fontSize: 22,
    color: "red",
    height: 50,
    width: "100%",
    paddingRight: 20,
  },
  textResultItemList: {
    color: "red",
    fontSize: 18,
  },
});

export default styles;
