import React from "react";
import "./App.css"
import Contact from "./components/Contacts";

export default function App() {
  return (
    <div className="App">
      <Contact
        name="Dark Pacman"
        avatar="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d9/d94c7fea789b35eace67cc49c6f2580a7a260742_full.jpg"
        status
      />
    </div>
  );
}