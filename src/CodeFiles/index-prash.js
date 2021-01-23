import React, { useState, useEffect } from "react";
import { Paper, Grid, Box, Button, Typography } from "@material-ui/core";

import AddFile from "./Components/AddFile";
import FileList from "./Components/FileList";
import Editor from "../Editor/Components/Editor";
import AddFolder from "./Components/AddFolder";

import websvf from "../api/websvf";
import FolderList from "./Components/FolderList";

//import "./codefiles.css";

const CodeFiles = ({ code, setCode }) => {
  const [fileName, setFileName] = useState("");
  const [folderName, setFolderName] = useState("");
  const [fileDialog, setFileDialog] = useState(false);
  const [folderDialog, setFolderDialog] = useState(false);

  const [fileOptions, setFileOptions] = useState(null);
  const [files, setFiles] = useState([
    {
      fileId: "init-temp",
      fileName: "example.c",
      version: "0.0",
      content: `//write your C code here`,
    },
  ]);
  const [userCode, setUserCode] = useState([
    {
      folderId: "root",
      folderName: "initial",
      files: [],
      // [
      //   {
      //     fileId: "init-temp",
      //     fileName: "example.c",
      //     version: "0.0",
      //     content: `//write your C code here`,
      //   },
      // ],
      // fileId: "init-temp",
      // fileName: "example.c",
      // version: "0.0",
      // content: `//write your C code here`,
    },
  ]);

  //selectedFile needs to be declared after userCode
  const [selectedFile, setselectedFile] = useState(userCode[0].fileName);
  //console.log(userCode);
  // console.log(`selected file is ${selectedFile} and file name is`);
  // console.log(`code is ${code}`);

  useEffect(() => {
    const elementIndex = userCode.findIndex((value) => {
      return value.fileName === selectedFile;
    });
    setCode(userCode[elementIndex].content);
  }, [selectedFile, userCode]);

  /*
   *************Folder Functions*******************
   */
  const handleAddFolder = () => {
    setUserCode([
      ...userCode,
      {
        folderId: Math.random(),
        folderName: `${folderName}`,
        files: [],
      },
    ]);

    console.log(userCode);
    closeFolderDialog();
    clearFolderName();
  };
  const handleFolderName = (e) => {
    setFolderName(e.target.value);
  };

  function openFolderDialog() {
    setFolderDialog(true);
  }
  function closeFolderDialog() {
    setFolderDialog(false);
    clearFileName();
  }
  const clearFolderName = () => {
    setFolderName("");
  };

  //File Functions
  const handleAddFile = (e) => {
    // setUserCode([
    //   ...userCode,
    //   {
    //     fileId: Math.random(),
    //     fileName: `${fileName}.c`,
    //     version: 0.1,
    //     content: `//write your C code here`,
    //   },
    // ]);
    console.log(e.target.value);
    console.log(userCode);
    console.log(`creating file with name ${fileName}`);
    console.log(userCode);
    closeFileDialog();
    clearFileName();
  };
  const handleFileName = (e) => {
    setFileName(e.target.value);
  };

  function openFileDialog() {
    setFileDialog(true);
  }
  function closeFileDialog() {
    setFileDialog(false);
    clearFileName();
  }

  function updateSelectedFile(e, selectedFileName) {
    console.log(e);
    console.log(e.target.textContent);
    setselectedFile(selectedFileName);
    const elementIndex = userCode.findIndex((value) => {
      return value.fileName === selectedFile;
    });
    setCode(userCode[elementIndex].content);
  }

  function handleChange(newValue) {
    setCode(newValue);
    console.log(code);
    const elementIndex = userCode.findIndex((value) => {
      return value.fileName === selectedFile;
    });
    let tempUserCode = [...userCode];

    tempUserCode[elementIndex] = {
      ...tempUserCode[elementIndex],
      content: newValue,
    };

    setUserCode(tempUserCode);
    console.log(userCode);
  }

  function handleFileOptions() {
    console.log(`button pressed`);
  }
  const clearFileName = () => {
    setFileName("");
  };

  return (
    <div>
      <Button>Project</Button>
      <Button>Version</Button>
      <Grid container justify='center'>
        <Box>
          <Grid container direction='row'>
            <Grid item>
              <Paper
                variant='outlined'
                square='true'
                style={{ height: "480px" }}
              >
                <Grid container direction='column' justify='flex-start'>
                  <Grid
                    container
                    justify='flex-end'
                    direction='row '
                    alignItems='center'
                  >
                    <Box mx={3}>
                      <Typography variant='h6'>Code Files</Typography>
                    </Box>
                    <Box>
                      <AddFolder
                        handleAddFolder={handleAddFolder}
                        handleFolderName={handleFolderName}
                        openDialog={openFolderDialog}
                        closeDialog={closeFolderDialog}
                        dialogBox={folderDialog}
                        userCode={userCode}
                        folderName={folderName}
                      />
                      {/* <AddFolder
                        handleAddFile={handleAddFile}
                        handleFileName={handleFileName}
                        clearFileName={clearFileName}
                        // fileName={fileName}
                        // userCode={userCode}
                        openDialog={openDialog}
                        closeDialog={closeDialog}
                        dialogBox={dialogBox}
                      /> */}
                    </Box>
                    <Box>
                      <AddFile
                        handleAddFile={handleAddFile}
                        handleFileName={handleFileName}
                        clearFileName={clearFileName}
                        fileName={fileName}
                        folderName={folderName}
                        userCode={userCode}
                        openDialog={openFileDialog}
                        closeDialog={closeFileDialog}
                        dialogBox={fileDialog}
                      />
                    </Box>
                  </Grid>
                  <FolderList userCode={userCode} />
                  {/* <FileList
                    userCode={userCode}
                    selectedFile={selectedFile}
                    updateSelectedFile={updateSelectedFile}
                    handleOptions={handleFileOptions}
                    fileOptions={fileOptions}
                  /> */}
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
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
            </Grid>
            <Grid item>
              <Paper
                variant='outlined'
                square='true'
                style={{ height: "480px" }}
              >
                <Grid container direction='column' justify='flex-start'>
                  <Grid container justify='flex-end'>
                    <Box>
                      <AddFile
                        handleAddFile={handleAddFile}
                        handleFileName={handleFileName}
                        clearFileName={clearFileName}
                        fileName={fileName}
                        userCode={userCode}
                        openDialog={openFileDialog}
                        closeDialog={closeFileDialog}
                        dialogBox={fileDialog}
                      />
                    </Box>
                  </Grid>
                  <FileList
                    userCode={userCode}
                    selectedFile={selectedFile}
                    updateSelectedFile={updateSelectedFile}
                  />
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default CodeFiles;
