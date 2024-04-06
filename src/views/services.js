import axios from "axios";

axios.defaults.baseURL = "https://threewag.onrender.com";
let AUTH_TOKEN;
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export const GetUserData = async () => {};

export const GetAllInfluencers = async () => {};

export const GetAllEnterprice = async () => {};

export const CreateUser = async ( username, password ) => {
  const user = await axios.post("/api/authentication/register/", {
    username:username,
    password:`3wag-${password}-3wag`,
  });

  if (user.response === 201) {    
    return "Usuario Registrado";
  } else {
    return user.data.username[0];
  }
};

export const Login = async (username) => {
    try {
        const user = await axios.post("/api/authentication/login/", {
            username: username,
            password: `3wag-${username}-3wag`,
          });
        
          if (user.response === 200) {
            AUTH_TOKEN = user.data.access;
            return "Usuario Logueado";
          }
    } catch (error) {
        console.log(error);
    return error.response;
    }
   
};

export const CreateInfluencer = async () => {};

export const CreateEnterprice = async () => {};

export const UpdateInfluencer = async () => {};

export const UpdateEnterprice = async () => {};
