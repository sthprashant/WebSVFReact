import React, {useState, useEffect} from "react";
import { Paper, Grid, Box, Button, Typography } from "@material-ui/core";

import AddFile from "./Components/AddFile";
import FileList from "./Components/FileList";
import Editor from "../Editor/Components/Editor";
import AddFolder from "./Components/AddFolder";
import FolderList from "./Components/FolderList";

const CodeFiles = (props) => {
  //const[projects, setProject] = useState([]);
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);

  async function getFolders(){

  }

  async function getFiles(){
    
  }

  useEffect(()=>{
    
  },[])

    return(<div>
      <Grid container justify="center">
        <Box>
          <Grid container direction="row">
            <Grid item>
              <Paper
                variant="outlined"
                square="true"
                style={{ height: "480px" }}
              >
                <Grid container direction="column" justify="flex-start">
                  <Grid
                    container
                    justify="flex-end"
                    direction="row "
                    alignItems="center"
                  >
                    <Box mx={3}>
                      <Typography variant="h6">Code Files</Typography>
                    </Box>
                    <Box>
                      <AddFolder
                      />

                    </Box>
                    <Box>
                      <AddFile

                      />
                    </Box>
                  </Grid>
                  <FolderList />
                </Grid>
              </Paper>
            </Grid>
            {/* <Grid item>
              {userCode.map((data, index) => {
                if (data.fileName === selectedFile) {
                  return (
                    <Editor
                      key={index}
                      mode={"c_cpp"}
                      name={"main-editor"}
                      value={data.content}
                      onChange={handleChange}
                    />
                  );
                }
                return "";
              })}
            </Grid> */}
            <Grid item>
              <Paper
                variant="outlined"
                square="true"
                style={{ height: "480px" }}
              >
                <Grid container direction="column" justify="flex-start">
                  <Grid container justify="flex-end">
                    <Box>
                      <AddFile

                      />
                    </Box>
                  </Grid>
                  <FileList
                  />
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>)
};

export default CodeFiles;
