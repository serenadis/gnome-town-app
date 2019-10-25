import React from "react";
import "./App.css";
import AppRouter from "./routers/AppRouters";

const App = props => {
  return (
      <div className="App">
        <AppRouter />
      </div>
  );
};

export default App;