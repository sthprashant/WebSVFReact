import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";

import websvf from "../../api/websvf";

const AddFolder = (props) => {
  const [dialogBox, setDialogBox] = useState(false);
  const [folderName, setFolderName] = useState("");

  const openDialog = () => {
    setDialogBox(true);
  };
  const closeDialog = () => {
    setDialogBox(false);
    clearFolderName();
  };

  const handleFolderName = (e) => {
    console.log(e.target.value);
    setFolderName(e.target.value);
  };
  const handleAddFolder = () => {
    websvf
      .post("/db/saveFolder", { folderName: folderName })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
    closeDialog();
    clearFolderName();
  };

  const clearFolderName = () => {
    setFolderName("");
  };
  return (
    <div>
      <IconButton variant="contained" color="primary" onClick={openDialog}>
        <CreateNewFolderIcon />
      </IconButton>
      <Dialog open={dialogBox} onClose={closeDialog}>
        <DialogTitle>Create new folder</DialogTitle>
        <DialogContent>
          <TextField label="Folder Name" onChange={handleFolderName} />
          <p>{folderName}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button onClick={handleAddFolder}>Create Folder</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddFolder;
