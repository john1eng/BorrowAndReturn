export const checkAuth = async (enteredEmail, enteredPass) => {
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAvBLaelMkggxSEpcwe8PNGd5ZyRUleQ4Y"
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