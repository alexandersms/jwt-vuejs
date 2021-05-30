import { jwtDecrypt } from "../../../shared/jwtHelper";

export const SET_AUTH_DATA = (state, data) => {
  const decryptedAuth = jwtDecrypt(data.access_token);
  console.log(decryptedAuth);

  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);

  const newAuthData = {
    token: data.access_token,
    refreshToken: data.refresh_token,
    username: decryptedAuth.username,
    userid: decryptedAuth.sub,
    expiration: decryptedAuth.exp,
  };
  state.authData = newAuthData;
};

export const SET_LOGIN_API_STATUS = (state, data) => {
  state.loginApiStatus = data;
};
