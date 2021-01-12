import React from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { Grid, Typography, Paper } from "@material-ui/core";
// import websvf from "./api/websvf";

import CodeFiles from "./CodeFiles/index";
import { Toolbar } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h4">WEBSVF</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" alignItems="center" direction="column">
        <Grid item>
          <Box my={3}>
            <CodeFiles />
          </Box>
        </Grid>
        <Grid item>
          <Box my={3}>
            <Paper variant="outlined" elevation={0} square="true">
              <Box px={42} py={30}>
                <Typography variant="h3">Output goes here</Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;