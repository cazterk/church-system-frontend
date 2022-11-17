import { api } from "src/api/api";
import { showLoginErrorToast } from "src/components/toasts";

const login = ({ userName, password }) => {
  return api
    .post(
      "login",
      JSON.stringify({
        userName,
        password,
      })
    )
    .then((res) => {
      if (res.status === 200) {
        if (res.data.token) {
          localStorage.setItem("user", JSON.stringify(res.data));
          localStorage.setItem("token", JSON.stringify(res.data.token));
        } else {
          console.log("incorrect credentials");
        }
      }
      console.log("1st token check :", res.data.token);
      return res.data;
    })
    .catch((err) => {
      showLoginErrorToast(err);
    });
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// Decodes a token from base64
const parseJwtToken = (token) => {
  try {
    return JSON.parse(atob(token.split(" ")[1]));
  } catch (err) {
    return null;
  }
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const getRawToken = () => {
  return JSON.parse(localStorage.getItem("token"));
};

const getCurrentToken = () => {
  let user = getCurrentUser();
  // Check if user is authenticated
  if (user) {
    let token = JSON.parse(localStorage.getItem("token"));
    const decodedJwt = parseJwtToken(token);
    if (decodedJwt * 1000 < Date.now()) {
      logout();
    }
    return token;
  } else {
    return "expired";
  }
};

const AuthService = {
  login,
  logout,
  getCurrentUser,
  getRawToken,
  getCurrentToken,
};

export default AuthService;
