import React from "react";
import "./App.css";
import { GlobalProvider } from "./GlobalContext";
import { Titles } from "./Titles";
import { Authors } from "./Authors";
import { Posts } from "./Posts";
import { Heading } from "./Heading";

export default function App() {
  return (
    <div className="container">
      <GlobalProvider>
        <Heading />
        <Titles />
        <Authors />
        <Posts />
      </GlobalProvider>
    </div>
  );
}
