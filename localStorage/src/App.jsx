import React from 'react'

const App = () => {
  // localStorage.setItem("User","Rohit");
  // sessionStorage.setItem("age","21");
  // sessionStorage.removeItem("age");
  // localStorage.setItem("user",JSON.stringify(user));
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)
  return (
    <div>App</div>
  )
}

export default App