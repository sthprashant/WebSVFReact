import React, { useState } from "react";
import "./App.css";

import websvf from "./api/websvf";

import prettyFormat from "pretty-format";
import Editor from "./Editor/Components/Editor";
import CodeFiles from "./CodeFiles/index";

import { Grid } from "@material-ui/core";

function App() {
  const [response, setResponse] = useState("");

  // const [userCode, setUserCode] = useState([
  //   {
  //     fileId: "init-temp",
  //     fileName: "example.c",
  //     version: "0.0",
  //     content: `//your C code goes here`,
  //   },
  // ]);
  // const [selectedFile, setselectedFile] = useState( userCode[0].fileName);
  // const [code, setCode] = useState(`#include<stdio.h>
  // int main() {
  //     int intType;
  //     float floatType;
  //     double doubleType;
  //     char charType;

  //     // sizeof evaluates the size of a variable
  //     printf("Size of int: %zu bytes\\n", sizeof(intType));
  //     printf("Size of float: %zu bytes\\n", sizeof(floatType));
  //     printf("Size of double: %zu bytes\\n", sizeof(doubleType));
  //     printf("Size of char: %zu byte\\n", sizeof(charType));

  //     return 0;
  // }`);

  //onChange Code
  const onChange = (newValue) => {
    console.log("change", newValue);
    //console.log(userCode)
    //setCode(newValue);
  };

  // const codeSubmit = async () => {
  //   const response = await websvf.post(
  //     "/",
  //     `code=${code}&fileName=${"test1"}&fileVersion=${"1.0"}`
  //   );

  //   setResponse(prettyFormat(response.data, { escapeString: false }));
  // };

  return (
    <div className="App">
      <CodeFiles />
      {/* <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid item xs={6} md={2}>
          <CodeFiles userCode = {userCode}/>
        </Grid>
        {/* <Grid item>
          <Editor onChange={onChange} value={`//write your code here`} />
        </Grid> 
        <Grid item xs={6} md={2}>
          <CodeFiles />
        </Grid> 
      </Grid> */}
    </div>
  );
}

export default App;
