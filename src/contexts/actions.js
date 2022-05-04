import useGun from "../hooks/useGun";
const { user, SEA } = useGun();

export async function authUser(dispatch, payload) {
  user.auth(payload.key);
  if (user.is) {
    user
      .get("profile")
      .get("name")
      .on((username) => {
        // Update the username and key in our auth context
        dispatch({
          type: "AUTH",
          payload: {
            username: username,
            key: JSON.stringify(user.is),
          },
        });
      });
  }
  console.log("dispatch", dispatch);
  console.log("payload", payload);
}
export async function createUser(dispatch, payload) {
  var key = await SEA.pair();
  authUser(dispatch, { key: key, username: payload.username });
  user.get("profile").get("name").put(payload.username);
  console.log("dispatch", dispatch);
  console.log("payload", payload);
}

export async function logoutUser(dispatch) {
  user.leave();
  // Resets the username and key in our auth context
  dispatch({ type: "AUTH_LOGOUT" });
  console.log("dispatch", dispatch);
}
