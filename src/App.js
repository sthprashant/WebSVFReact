import React, { useState } from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { Grid, Typography, Paper, Button } from "@material-ui/core";

import CodeFiles from "./CodeFiles/index";
import { Toolbar } from "@material-ui/core";

import websvf from "./api/websvf";

import SVG from "react-inlinesvg";

function App() {
  const [code, setCode] = useState(`//write your C code here`);
  const [output, setOutput] = useState("");

  const genCallGraph = async () => {
    const response = await websvf.post("/analysis/callGraph", {
      code: code,
      fileName: "example",
    });
    if (response) {
      setOutput(response.data);
    }
  };

  const genICFG = async () => {
    const response = await websvf.post("/analysis/icfg", {
      code: code,
      fileName: "example",
    });
    if (response) {
      setOutput(response.data);
    }
  };

  const genSVFG = async () => {
    const response = await websvf.post("/analysis/svfg", {
      code: code,
      fileName: "example",
    });
    if (response) {
      setOutput(response.data);
    }
  };

  const genVFG = async () => {
    const response = await websvf.post("/analysis/vfg", {
      code: code,
      fileName: "example",
    });
    if (response) {
      setOutput(response.data);
    }
  };

  const genPAG = async () => {
    const response = await websvf.post("/analysis/pag", {
      code: code,
      fileName: "example",
    });
    if (response) {
      setOutput(response.data);
    }
  };

  function onClick(e) {
    //Parse e.target.value to get the line no.
    //Set the highlightedState to the ln
  }

  function preProcessor(code) {
    const parser = new DOMParser();

    const xmlDoc = parser.parseFromString(code, "text/xml");

    //Analyse which nodes have the '{ln: number fl: string}' string
    let text = Array.from(xmlDoc.getElementsByTagName("g"));
    //Array of all g Elements that have { fl }
    let filtered = text
      .filter(
        (value) =>
          /\{[\s]+ln\:[\s]+[0-9]+[\s]+cl\:[\s]+[0-9]+[\s]+fl\:[\s]+[a-z]+\.c[\s]+\}/.test(
            value.innerHTML
          ) ||
          /\{[\s]+in[\s]+line\:[\s]+[0-9]+[\s]+file\:[\s]+[a-z]+\.c[\s]+\}/.test(
            value.innerHTML
          )
      )
      .map((value) => value.id);
    console.log(xmlDoc);
    console.log(filtered);

    //Add onClick to the elements with ids present in the filtered array

    /*
    --Tianyang's index.js Logic--

    let ln = null;
    let fl = null;
    for (let len = 0; len < text.length; len++) {
      let inner = text[len].innerHTML;
      let split = inner.slice(1, -1).split(" ");

      for (let i = 0; i < split.length; i++) {
        if (
          (split[i] === "line:" || split[i] === "ln:") &&
          i + 1 < split.length
        ) {
          ln = split[i + 1];
        }
        if (
          (split[i] === "file:" || split[i] === "fl:") &&
          i + 1 < split.length
        ) {
          fl = split[i + 1];
        }
      }
    }

    console.log("ln:", +ln, "fl:", fl);
    
    --Tianyang's index.js Logic--
    */

    //Returning code as is until the pre-processing logic is implemented
    //return code;

    //return the modified XML Document;
    var s = new XMLSerializer();
    var newXmlStr = s.serializeToString(xmlDoc);
    return newXmlStr;
  }

  return (
    <div className='App'>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h4'>WEBSVF</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' alignItems='center' direction='column'>
        <Grid item>
          <Box my={3}>
            <CodeFiles code={code} setCode={setCode} />
          </Box>
        </Grid>
        <Button onClick={genCallGraph}>CallGraph</Button>
        <Button onClick={genICFG}>IFCG</Button>
        <Button onClick={genPAG}>PAG</Button>
        <Button onClick={genSVFG}>SVFG</Button>
        <Button onClick={genVFG}>VFG</Button>
        <Grid item>
          <Box my={3}>
            <Paper variant='outlined' elevation={0} square={true}>
              {/* <Box px={42} py={30}> */}
              <Box>{/* <Typography variant="h3"></Typography> */}</Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
      {/* SVG being rendered after its sent as a response from the POST request */}
      {/* SVG sizing/text-overflow needs to be fixed */}
      <SVG
        src={output}
        preProcessor={preProcessor}
        loader={<span>Loading...</span>}
      />
      {/* {parserGlobal.parseFromString(output, "text/xml")} */}
    </div>
  );
}

export default App;
