import React from "react";
function HomePage() {
  return (
    <div>
      <h2 style={title}>You are Authenticated Now </h2>
    </div>
  );
}

export default HomePage;

const title: React.CSSProperties = {
  textAlign: "center",
};
