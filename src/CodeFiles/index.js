import React, { useState } from "react";
import { Paper, withStyles, Grid, Box } from "@material-ui/core";

import AddFile from "./Components/AddFile";
import FileList from "./Components/FileList";
import Editor from "../Editor/Components/Editor";

import "./codefiles.css";

const CodeFiles = (props) => {
  const [fileName, setFileName] = useState("");
  const [dialogBox, setDialogBox] = useState(false);
  const [code, setCode] = useState(`//write your C code here`);

  const [userCode, setUserCode] = useState([
    {
      fileId: "init-temp",
      fileName: "example.c",
      version: "0.0",
      content: `//write your C code here`,
    },
  ]);
  const [selectedFile, setselectedFile] = useState(userCode[0].fileName);
  console.log(`selected file is ${selectedFile} and file name is`);
  console.log(`code is ${code}`);
  const handleAddFile = () => {
    setUserCode([
      ...userCode,
      {
        fileId: Math.random(),
        fileName: fileName,
        version: 0.1,
        content: `//write your C code here`,
      },
    ]);

    console.log(userCode);
    console.log(`creating file with name ${fileName}`);
    console.log(userCode);
    closeDialog();
    clearFileName();
  };
  const handleFileName = (e) => {
    setFileName(e.target.value);
  };

  function openDialog() {
    setDialogBox(true);
  }
  function closeDialog() {
    setDialogBox(false);
    clearFileName();
  }
  // function updateSelectedFile(selectedFileName) {
  //   console.log(selectedFileName);
  //   setselectedFile(selectedFileName.target.textContent);
  //   console.log(selectedFile);
  //   const elementIndex = userCode.findIndex((value) => {
  //     return value.fileName === selectedFile;
  //   });
  //   setCode(userCode[elementIndex].content);
  // }
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
  // function getFileIndex() {
  //   const elementIndex = userCode.findIndex((value) => {
  //     return value.fileName === selectedFile;
  //   });
  // }
  const clearFileName = () => {
    setFileName("");
  };

  return (
    <div>
      <Box>
        <Grid container direction="row">
          <Grid item>
            <Paper>
              <Grid container direction="column" justify="center">
                <AddFile
                  handleAddFile={handleAddFile}
                  handleFileName={handleFileName}
                  clearFileName={clearFileName}
                  fileName={fileName}
                  userCode={userCode}
                  openDialog={openDialog}
                  closeDialog={closeDialog}
                  dialogBox={dialogBox}
                />
                <FileList
                  userCode={userCode}
                  selectedFile={selectedFile}
                  updateSelectedFile={updateSelectedFile}
                />
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            {userCode.map((data) => {
              if (data.fileName === selectedFile) {
                return <Editor value={data.content} onChange={handleChange} />;
              }
              return;
            })}
            {/* <Editor value={code} onChange={handleChange} /> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CodeFiles;
