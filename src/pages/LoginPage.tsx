import React from "react";
function LoginPage() {
  return (
    <div style={Container}>
      <h2>Login</h2>
      <input style={inputField} type="text" placeholder="Enter Your Email" />
      <input style={inputField} type="text" placeholder="Enter Your Password" />
      <input style={inputField} type="submit" value="Login" />
    </div>
  );
}

export default LoginPage;
const Container: React.CSSProperties = {
  maxWidth: "50%",
  height: "300px",
  margin: "0 auto",
  background: "tomato",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px 20px",
};
const inputField: React.CSSProperties = {
  border: "1px solid tomato",
  padding: "10px ",
  borderRadius: "5px",
  fontSize: "18px",
  margin: "5px auto",
  width: "100%",
};
