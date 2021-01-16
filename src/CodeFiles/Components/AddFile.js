import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

import websvf from "../../api/websvf";

const AddFile = (props) => {
  const [dialogBox, setDialogBox] = useState(false);
  const [fileName, setFileName] = useState("");
  const [userFolders, setUserFolders] = useState([]);

  const getFolders = async () => {
    var folders =[]
    try {
      const project = await websvf.get("/db/getFiles");
      folders = project.data.projects.map(project =>{
        var folderArr = [];
        folderArr = project.userCode.map(value =>{
          return value.folderName
        });
        return folderArr;
      })
      //console.log(userFolders)
      setUserFolders(folders);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFolders();

  },[]);

  const openDialog = () => {
    setDialogBox(true);
  };
  const closeDialog = () => {
    setDialogBox(false);
    clearFileName();
  };

  const handleFileName = (e) => {
    console.log(e.target.value);
    setFileName(e.target.value);
  };
  const handleAddFile = () => {
    closeDialog();
    clearFileName();
  };

  const clearFileName = () => {
    setFileName("");
  };

  return (
    
    <div>
      
      <IconButton variant="contained" color="primary" onClick={openDialog}>
        <AddIcon />
      </IconButton>
      <Dialog open={dialogBox} onClose={closeDialog}>
        <DialogTitle>Create a New File</DialogTitle>
        <DialogContent>
          <Select native value={userFolders} onChange = {()=>{}}
          >{userFolders}</Select>
          <TextField
            label="File Name"
            onChange={handleFileName}
            value={fileName}
          />
          <p>{fileName}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button onClick={handleAddFile}>Create File</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddFile;
