import { StyleSheet, Platform, StatusBar } from "react-native";

// Home Screen
export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  banner: {
    backgroundColor: "#F3FAFE",
    width: "100%",
    height: "35%",
  },
  loginButton: {
    marginTop: "10%",
    backgroundColor: "#476CF0",
    minWidth: 300,
    minHeight: 90,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,

    elevation: 17,
  },
  loginText: {
    color: "#fff",
  },
  signupButton: {
    marginTop: "5%",
    backgroundColor: "#fff",
    minWidth: 300,
    minHeight: 90,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    elevation: 7,
  },
  signupText: {
    color: "#000",
  },
});

// SignIn & SignUp Screen
export const SignStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  formWrap: {
    marginVertical: "50%",
    marginHorizontal: "10%",
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
    fontSize: 35,
  },
  buttonWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pressableView: {
    borderRadius: 50,
    overflow: "hidden",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#476CF0",
    minWidth: 130,
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
  },
  textInput: {
    backgroundColor: "#fff",
    height: 70,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
});

export const ChatRoomStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    height: "9%",
    marginBottom: 20,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    elevation: 1,
    marginTop: -2,
  },
  headerWrap: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
});
