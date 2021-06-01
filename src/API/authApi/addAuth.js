
export const addAuth = async (enteredEmail, enteredPass) => {
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAvBLaelMkggxSEpcwe8PNGd5ZyRUleQ4Y"
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: enteredEmail,
      password: enteredPass,
      returnSecureToken: true,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  return response;
}

// .then((res) => {
//   if (res.ok) {
//     return res.json();
//   } else {
//     return res.json().then((data) => {
//       let errorMessage = "Authentication failed!";
//       throw new Error(errorMessage);
//     });
//   }
// })
// .then((data) => {
//   console.log(data);
//   const expirationTime = new Date(
//     new Date().getTime() + +data.expiresIn * 1000
//   );
//   authCtx.login(data.idToken, expirationTime.toISOString());
// })
// .catch((err) => {
//   alert(err.message);
// });