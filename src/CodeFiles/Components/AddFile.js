import {
  Button,
  TextField,
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";

const AddFile = (props) => {
  return (
    <div>
      <IconButton
        variant="contained"
        color="primary"
        onClick={props.openDialog}
      >
        <AddIcon />
      </IconButton>
      <Dialog open={props.dialogBox} onClose={props.closeDialog}>
        <DialogTitle>Create a New File</DialogTitle>
        <DialogContent>
          <TextField
            label="File Name"
            onChange={props.handleFileName}
            value={props.fileName}
          />
          <p>{`${props.fileName}.c`}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeDialog}>Cancel</Button>
          <Button onClick={props.handleAddFile}>Create File</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddFile;
