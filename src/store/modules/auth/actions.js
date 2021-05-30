export const login = ({ commit }, user) => {
  console.log(user);
  const data = {
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJzdWIiOjEsImlhdCI6MTYwODIwNjE3OSwiZXhwIjozNjAxNjA4MjA2MTc5fQ.BcHKT6ffgvkt0EztkJT35a0Yc7iWF9wkeNxKB4wSJEQ",
    refresh_token: "",
  };
  commit("SET_AUTH_DATA", data);
  commit("SET_LOGIN_API_STATUS", "success");
};
