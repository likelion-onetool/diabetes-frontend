import axios from "axios";

export async function isUserLoggedIn() {
  const token = sessionStorage.getItem("accessToken");
  if (token) {
    try {
      const res = await axios.get("/users", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      });
      if (res.status === 200) {
        return true;
      }
    } catch (error) {
      console.log("로그인바랍니다.");

      return false;
    }
  }
  return false;
}
