import axios from "axios";

axios.defaults.baseURL = "https://threewag.onrender.com";
let AUTH_TOKEN;


axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export const GetUserData = async () => {

  try{
    const users = await axios.get('/api/customers/influencer/list/',{
      headers: {
        'Authorization': `Bearer ${AUTH_TOKEN}`        
      }
    })
    if(users.status === 200){

      return users.data
    }
    else{
      return "Empty Influencers"
    }
  }
  catch (error) {
  console.log(error)
  return error.status
}




};

export const GetAllInfluencers = async () => {};

export const GetAllEnterprice = async () => {};

export const CreateUser = async ( username, password ) => {
  const user = await axios.post("/api/authentication/register/", {
    username:username,
    password:`3wag-${password}-3wag`,
  });

  if (user.status > 200) {    
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
        
          if (user.status >= 200) {
            console.log(user.data.access)
            AUTH_TOKEN = user.data.access;
            axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
            return "Usuario Logueado";
          }
    } catch (error) {
        console.log(error);
    return error.response;
    }
   
};

export const CreateInfluencer = async (phone,country,ein,avatar,name, gender, birthday, category) => {

  const formdata = new FormData();
  formdata.append("phone", phone);
  formdata.append("country", country);
  formdata.append("ein", ein);
  formdata.append("avatar", avatar);
  formdata.append("name", name);
  formdata.append("gender", gender);
  formdata.append("birthday", birthday);
  formdata.append("category", category); 

try {
  const save = await axios.post('/api/customers/influencer/',formdata,{
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${AUTH_TOKEN}`        
    }
  }, )


  return save
} catch (error) {
  
  return error
}

};

export const CreateEnterprice = async () => {};

export const UpdateInfluencer = async () => {};

export const UpdateEnterprice = async () => {};
