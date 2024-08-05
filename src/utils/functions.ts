import axios from "axios";

export async function isUserLoggedIn() {
  const token = sessionStorage.getItem("accessToken");
  if (token) {
    const res = await axios.get("/users", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}
