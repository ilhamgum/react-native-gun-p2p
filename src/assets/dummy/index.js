export async function addUser() {
  const user = [];
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) =>
      data.forEach((e) => {
        user.push({
          id: e.id,
          name: e.name,
          message: "helo",
        });
      })
    )
    .catch((err) => console.log(err));

  const allUser = user.concat(dataUser);
  console.log(allUser);
  return allUser;
}
addUser();

export const dataUser = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Lander",
    message: "helo",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Maeve",
    message: ":D",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "Deep",
    message: "helo puta",
  },
  {
    id: "58694a0f-3da1-471f-bd96-141321e29d72",
    name: "Starlight",
    message: "helo puta",
  },
  {
    id: "58694a0f-3da1-471f-bd96-152271e29d72",
    name: "Train",
    message: "helo puta",
  },
];
