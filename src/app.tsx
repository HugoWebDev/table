import "./App.css";
import React from "react";
import { Counter, UserTable } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <UserTable /> */}
      <Counter name="hugo" />
    </div>
  );
};

export default App;
