import React from "react"
import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import Post from "./Post.jsx"
import Profile from "./Profile.jsx"
import "./App.css";

function App() {
  return (
    <>
      <Hello name="World" />
      <img className="logo" src={makersLogo}></img>
      <Post />
      <Profile />
    </>
  );
}

export default App;
