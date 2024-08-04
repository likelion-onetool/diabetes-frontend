export function isUserLoggedIn() {
  const token = sessionStorage.getItem("accessToken");
  return !!token; // 토큰이 있으면 true, 없으면 false 반환
}
