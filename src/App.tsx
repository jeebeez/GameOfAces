import React from "react";
import { Game } from "components";
// import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div
      className="bg-gradient-to-b relative	from-green-700 to-black p-10 bg-cover  w-screen h-screen"
      data-testid="appComponent"
    >
      <Game />
    </div>
  );
};

export default App;
