import React from "react";
import CardList from "./CardList.js";
import { robots } from "./robots";
import SearchBox from "./SearchBox";



const state = {
    robots: robots,
    searchfield: ''
}


const App = () => {
  return (
    <div className="tc">
      <h1>RoboFriendsz</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
};

export default App;
