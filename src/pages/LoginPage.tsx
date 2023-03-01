import React, { useEffect, useState } from "react";
import { useAuthUser, useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const signIn = useSignIn();
  const auth = useAuthUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth()) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const submitLogin = () => {
    if (
      signIn({
        token: "Im Token",
        expiresIn: 1000,
        tokenType: "Bearer",
        authState: data,
      })
    ) {
      // Redirect or do-something
      navigate("/");
    }
  };

  return (
    <div style={Container}>
      <h2>Login</h2>
      <input
        style={inputField}
        onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
        type="text"
        placeholder="Enter Your Email"
      />
      <input
        style={inputField}
        onChange={(e) => setData((d) => ({ ...d, password: e.target.value }))}
        type="text"
        placeholder="Enter Your Password"
      />
      <input
        style={inputField}
        onClick={submitLogin}
        type="submit"
        value="Login"
      />
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
