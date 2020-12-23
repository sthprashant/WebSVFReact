import React, { useState } from "react";
import "./App.css";

import websvf from "./api/websvf";

import prettyFormat from "pretty-format";
import Editor from "./Editor/Components/Editor";
import CodeFiles from "./CodeFiles/index";

import { Grid } from "@material-ui/core";

function App() {
  const [response, setResponse] = useState("");

  //onChange Code
  const onChange = (newValue) => {
    console.log("change", newValue);
    //console.log(userCode)
    //setCode(newValue);
  };

  return (
    <div className="App">
      <CodeFiles />
    </div>
  );
}

export default App;
