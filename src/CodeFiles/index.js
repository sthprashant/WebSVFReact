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
  const handleAddFile = () => {
    setUserCode((oldUserCode) => [
      ...oldUserCode,
      {
        fileId: Math.random(),
        fileName: fileName,
        version: 0.1,
        content: code,
      },
    ]);

    console.log(userCode);
    console.log(`creating file with name ${fileName}`);
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
  function updateSelectedFile(e, selectedFileName) {
    console.log(e);
    console.log(e.target.textContent);
    setselectedFile(selectedFileName);
  }
  // function handleChange(newValue, value, index) {
  //   //console.log(newValue);
  //   console.log(
  //     `event target value us ${newValue} and new value is ${JSON.stringify(
  //       value
  //     )} and index is ${index} ${JSON.stringify(index)}`
  //   );
  //   setCode(newValue);
  //    console.log(code)
  //   // const elementIndex = userCode.findIndex((value) => {
  //   //   return value.fileName === selectedFile;
  //   // });
  //   //setUserCode(...userCode)
  //   // function onChange(newValue) {
  //   //   //console.log(newValue);
  //   //   setCode(newValue);
  //   //   const elementIndex = userCode.findIndex((value) => {
  //   //     return value.fileName === selectedFile;
  //   //   });
  //   //console.log(`element index is ${elementIndex}`);
  //   // setUserCode([...userCode, (userCode[elementIndex].content = code)]);
  //   // setUserCode(...userCode, userCode.)
  //   // userCode.forEach(value => {
  //   //   if(value.fileName === selectedFile){
  //   //     setUserCode(value.content = newCodeValue)
  //   //   }
  //   // })
  //   console.log(userCode);
  // }

  function handleChange(newValue) {
    setCode(newValue);
    console.log(code);
  }
  function getFileIndex() {
    const elementIndex = userCode.findIndex((value) => {
      return value.fileName === selectedFile;
    });
  }
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
            {userCode.map((value, index) => {
              if (value.fileName === selectedFile) {
                return (
                  <Editor
                    value={value.content}
                    onChange={handleChange}
                    // onChange={(newValue) => handleChange(newValue, value, index)}
                  />
                );
              }
            })}
            {/* <Editor /> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CodeFiles;
