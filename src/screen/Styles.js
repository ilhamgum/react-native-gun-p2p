import { StyleSheet, Platform, StatusBar } from "react-native";

// Basic style
const shadow = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    elevation: 7,
  },
  allCenter = {
    alignItems: "center",
    justifyContent: "center",
  };

export const BasicStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

// SignIn & SignUp Screen
export const SignStyles = StyleSheet.create({
  formWrap: {
    marginVertical: "50%",
    marginHorizontal: "10%",
  },
  title: {
    fontSize: 35,
    textAlign: "center",
    marginBottom: 30,
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
    ...shadow,
  },
  button: {
    backgroundColor: "#476CF0",
    minWidth: 130,
    minHeight: 50,
    ...allCenter,
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  // header
  header: {
    height: "10%",
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
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
  // chat flatlist
  item: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "center",
  },
  messageContainer: {
    marginHorizontal: 15,
  },
  name: {
    fontSize: 18,
    marginBottom: 3,
  },
  message: {
    fontSize: 16,
    color: "#7E7E7E",
  },
  profilePhotoContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    elevation: 1,
    overflow: "hidden",
  },
  profilePhoto: {
    height: 50,
  },
});
