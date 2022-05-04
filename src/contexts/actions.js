import useGun from "../hooks/useGun";
const { user, SEA } = useGun();

export async function authUser(dispatch, payload) {
  console.log("dispatch", dispatch);
  console.log("payload", payload);
}
export async function createUser(dispatch, payload) {
  console.log("dispatch", dispatch);
  console.log("payload", payload);
}

export async function logoutUser(dispatch) {
  console.log("dispatch", dispatch);
}
