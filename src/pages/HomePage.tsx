import React from "react";
import { useSignOut } from "react-auth-kit";
function HomePage() {
  const signOut = useSignOut();
  return (
    <div>
      <h2 style={title}>You are Authenticated Now </h2>
      <button onClick={() => signOut()} style={buttonStyle}>
        Logout
      </button>
    </div>
  );
}

export default HomePage;

const title: React.CSSProperties = {
  textAlign: "center",
};
const buttonStyle: React.CSSProperties = {
  display: "block",
  margin: "auto",
  padding: "10px 20px",
  fontSize: "18px",
};
