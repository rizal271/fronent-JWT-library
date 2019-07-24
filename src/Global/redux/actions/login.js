import axios from "axios";
let URL = "http://localhost:3342";


export const currentLogin = (data) => {
    console.log('ini dari aksi',data[0]);
  return {
    type: "LOGIN_USER",
    payload: axios.post(URL + "/user/login", data[0]),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
    // body: JSON.stringify({ data })
    //   .then(resp => resp.json())
    //   .then(data => {
    //     if (data.message) {
    //       // Here you should have logic to handle invalid creation of a user.
    //       // This assumes your Rails API will return a JSON object with a key of
    //       // 'message' if there is an error with creating the user, i.e. invalid username
    //     } else {
    //       localStorage.setItem("token", data.jwt);
    //     //   dispatch(loginUser(data.user));
    //     }
    // })
  };
};
